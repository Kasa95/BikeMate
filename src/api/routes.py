"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.models import db, User, Group, Comment, Meeting
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
import json
import bcrypt
from bcrypt import hashpw
import datetime
from sqlalchemy import Column, DateTime, ForeignKey
import datetime
from flask_mail import Mail, Message
import random
import string
from geopy.geocoders import Nominatim


# instalar:
# pipenv install py-bcrypt
# pipenv install Flask-Mail
# pipenv install geopy

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


#ruta protegida . Obtener perfil del usuario : Profile
@api.route("/profile", methods=["GET"])
@jwt_required() 
def protected():
        current_user = get_jwt_identity()
        user = User.query.filter_by(email=current_user).first()
        return jsonify(user.serialize()) , 200


#crear usuario (modificado, ahora manda mail bienvenida cuando se registra)
@api.route("/register", methods=["POST"])
def create_user():
    body = json.loads(request.data)

    if User.query.filter_by(email=body["email"]).first():
        return jsonify({"msg": "Usuario duplicado"}), 401 

    if not body["email"] or not body["password"] or not body["name"]:
        return jsonify({"msg": "Datos incorrectos"}), 404 

  
    hashed = bcrypt.hashpw(body["password"], bcrypt.gensalt())

    # Incluir cuando hagamos cambio en el front, porque sino, va a esperar el dato y va a dar error:
    user = User(email=body["email"], password=hashed, name=body["name"] , city=body["city"] , bikemodel=body["bikemodel"] , routetype=body["routetype"], speed=body["speed"], distance=body["distance"])
            
    # user = User(email=body["email"], password=hashed, name=body["name"]) 
    # user = User.query.filter_by(email=email).first()
    # user = User(email=body["email"], password=body["password"], is_active=True)

    db.session.add(user)
    db.session.commit()

    # inicio mail de bienvenida
    with current_app.app_context():
        mail = Mail() 
    
        msg = Message("Welcome to BikeMate",
                  sender="bikemateapp@gmail.com",
                  recipients=[user.email])
        msg.body = "Hello " + (user.name) + ", welcome to BikeMate !"
        msg.html = "<h1>Hello " + (user.name) + ". Welcome to <strong>BikeMate!</strong></h1> <br> <p>Any question? mail us at: <strong>bikemateapp@gmail.com</strong></p>"

        mail.send(msg)
    # final mail de bienvenida

    response_body={
            "msg": "usuario creado"
        }
        # return jsonify(response_body), 200
    access_token = create_access_token(identity=body["email"], expires_delta=datetime.timedelta(minutes=60))
    return jsonify(access_token=access_token), 200   

   

#crear grupo
@api.route("/new_group", methods=["POST"])
def create_group():
    body = json.loads(request.data)

    if Group.query.filter_by(name=body["name"]).first():
        return jsonify({"msg": "Grupo ya existente"}), 401 

    if not body["name"] or not body["city"] or not body["speed"] or not body["distance"]:
        return jsonify({"msg": "Name, City, Speed & Distance required"}), 404 

    
    group = Group(name=body["name"], city=body["city"], speed=body["speed"], distance=body["distance"], routetype=body["routetype"])

    # user = User(email=body["email"], password=body["password"], is_active=True)
    db.session.add(group)
    db.session.commit()

    # response_body={
    #     "msg": "Grupo creado"
    # }
    return jsonify(group.serialize()), 200
    
   

#login
@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).first()

    # esto esta puesto para que compruebe si los datos no son correctos
    # si no ponia este if, el fetch fallaba ya que USER no estaba creado
    # entonces estaba comparando el mail con el mail de user (que no existe)
    if not user :
        return jsonify({"msg": "datos incorrectos"}), 401


    # if email != user.email or password != user.password:
    if email != user.email or not bcrypt.checkpw(password, user.password):
        return jsonify({"msg": "datos incorrectos"}), 401 
    
    # if user and user.password != password:
    #     return jsonify ("datos incorrectos"), 401    
    
    access_token = create_access_token(identity=email , expires_delta=datetime.timedelta(minutes=60))
    info_user = {"email":user.email ,"id":user.id ,"name":user.name , "city":user.city , "speed":user.speed , "distance":user.distance, "bikemodel": user.bikemodel , "routetype": user.routetype ,"access_token":access_token}
    # return jsonify(access_token=access_token)   
    return jsonify(info_user)   


#group search
# ojo, falta arreglar que si en la busqueda la palabra buscada está en nombre y en ciudad
# solo incluya un resultado. Arreglar con un if
@api.route('/group_search', methods=['POST'])
def search_groups():
    request_data = request.get_json()
    print(request_data)
    searched = (request_data["busqueda"])
    
    # El primer query lo hice asi pero fallaba y si encontraba el dato en name, ya no continuaba buscando grupos en city
    # asi que he tenido que hacer los querys por separado 
    # grupo1 = Group.query.filter(Group.name.contains(searched)).all() or Group.query.filter(Group.city.contains(searched)).all() or Group.query.filter_by(speed=searched).all() or Group.query.filter_by(distance=searched).all()
    
    if type(searched) is str:
        result1 = Group.query.filter(Group.name.contains(searched)).all()
        result2= Group.query.filter(Group.city.contains(searched)).all()
        group_results = result1 + result2
    else:
        result3 = Group.query.filter_by(speed=searched).all()
        result4 = Group.query.filter_by(distance=searched).all()
        group_results = result3 + result4

    print(group_results)
    NewDict = []

    if not group_results :
        return jsonify("msg: Grupo no encontrado"), 400

    for i in group_results:
        NewDict += [{"name":i.name , "city":i.city , "speed":i.speed , "distance":i.distance , "routetype": i.routetype , "id":i.id}]

    return jsonify(NewDict), 200


#user search
@api.route('/user_search', methods=['POST'])
def search_user():
    request_data = request.get_json()
    print(request_data)
    searched = (request_data["busqueda"])
    
    if type(searched) is str:
        result1 = User.query.filter(User.name.contains(searched)).all()
        result2= User.query.filter(User.city.contains(searched)).all()
        result3 = User.query.filter_by(email=searched).all()
        user_results = result1 + result2 + result3
    else:
        result4 = User.query.filter_by(speed=searched).all()
        result5 = User.query.filter_by(distance=searched).all()
        user_results = result4 + result5

    print(user_results)
    UserSearchDict = []

    if not user_results :
        return jsonify("msg: Usuario no encontrado"), 400

    for g in user_results:
        UserSearchDict += [{"name":g.name , "city":g.city , "speed":g.speed , "distance":g.distance , "email":g.email , "bikemodel": g.bikemodel , "routetype": g.routetype , "id":g.id}]

    return jsonify(UserSearchDict), 200


#dashboard info grupos
@api.route('/dashboard_info', methods=['GET'])
def dashboard_info():
    
    info_groups = Group.query.all()
    dash_info = []

    for x in info_groups:
        dash_info += [{"users_quantity":len(x.users),"name":x.name , "city":x.city , "speed":x.speed , "distance": x.distance , "routetype": x.routetype , "id": x.id}]
   
    return jsonify(dash_info), 200


#info ALL users
@api.route('/all_users', methods=['GET'])
def users_info():
    
    info_users = User.query.all()
    users = []

    for u in info_users:
        users += [{"name":u.name , "city":u.city , "speed":u.speed , "distance": u.distance , "routetype": u.routetype, "bikemodel": u.bikemodel , "email": u.email , "id":u.id }]
   
    return jsonify(users), 200


#dashboard info grupo individual con ruta dinamica
@api.route('/group/<int:groupId>', methods=['GET'])
def group_dinamic(groupId):
    
    current_group = Group.query.get(groupId)
    if not current_group:
        return jsonify("msg: Error. Grupo no encontrado"), 404

    users_quantity = len(current_group.users)
    group_comments = current_group.comments
    group_info = {"name":current_group.name , "city":current_group.city , "id":current_group.id, "speed":current_group.speed , "distance":current_group.distance, "routetype":current_group.routetype ,"users_quantity":users_quantity}
   
    return jsonify(group_info), 200


#Obtener nombres e id de los users que están en un grupo
# endpoint con relaciones many to many
@api.route('/group_usernames/<int:groupId>', methods=['GET'])
def group_usernames(groupId):
    
    current_group = Group.query.get(groupId)
    
    if not current_group:
        return jsonify("msg: Grupo no existe"), 404

    users_quantity = len(current_group.users)
    if not users_quantity:
        return jsonify("msg: Grupo vacio"), 400

    usersmail = current_group.users

    # lo ideal seria hacer un map si solo quisieramos el nombre del grupo, asi:
    # names = list(map(lambda item: item.name, usersmail))
    datos_users = []
    for mail in usersmail:
        datos_users += [{"name": mail.name , "id": mail.id}]

    return jsonify(datos_users), 200


#editar perfil
@api.route('/user/edit', methods=['PUT'])
@jwt_required()
def edit_user():
    body = json.loads(request.data)

    if not body:
        return jsonify("msg: Error. Faltan datos"), 404

    name = request.json.get("name", None)  
    email = request.json.get("email", None)
    # newemail = request.json.get("newemail", None)
    city = request.json.get("city", None)
    bikemodel = request.json.get("bikemodel", None)
    routetype = request.json.get("routetype", None)
    speed = request.json.get("speed", None)
    distance = request.json.get("distance", None)
    photo = request.json.get("photo", None)
    cover = request.json.get("cover", None)

    # password = request.json.get("password", None)

    # aqui encriptamos la contraseña
    # hashed = bcrypt.hashpw(body["password"], bcrypt.gensalt())

    # if User.query.filter_by(email=newemail).first():
    #     return jsonify("msg: Email ya registrado"), 404
    # esta parte la hemos quitado porque no vamos a cambiar mail por seguridad

    userEmail = get_jwt_identity()
    user = User.query.filter_by(email=userEmail).first()

    # user = User.query.filter_by(email=email).first()

    if not user :
        return jsonify("msg: Email incorrecto"), 404


    if name:    
        user.name = name
    # if newemail:
    #     user.email = newemail
    # eliminado cambio de email por seguridad
    if city:
        user.city = city
    if bikemodel:
        user.bikemodel = bikemodel
    if routetype:
        user.routetype = routetype
    if speed:
        user.speed = speed
    if distance:
        user.distance = distance
    # metemos la contraseña cambiada y encriptada por bcrypt
    # if hashed:
    #     user.password = hashed
    if photo:
        user.photo = photo
    if cover:
        user.cover = cover

    db.session.commit()

    return jsonify(user.serialize()), 200


#editar grupo. Solo un usuario que pertenezca al grupo puede editar
@api.route('/group_edit/<int:groupId>', methods=['PUT'])
@jwt_required()
def group_edit(groupId):
    body = json.loads(request.data)

    if not body:
        return jsonify("msg: Error. Faltan datos"), 404

    name = request.json.get("name", None)  
    city = request.json.get("city", None)
    routetype = request.json.get("routetype", None)
    speed = request.json.get("speed", None)
    distance = request.json.get("distance", None)
    photo = request.json.get("photo", None)
    cover = request.json.get("cover", None)


    userEmail = get_jwt_identity()
    user = User.query.filter_by(email=userEmail).first()
    group = Group.query.get(groupId)

    # print (group)

    userid = user.id
    # aqui comprobamos si el usuario pertenece al grupo
    # si no pertenece, no puede editar
    if not Group.query.filter(Group.users.any(id=userid)).first():
        return jsonify({"msg":"el user no pertenece al grupo, no puede editarlo"}), 404
   


    if name:    
        group.name = name
    if city:
        group.city = city
    if routetype:
        group.routetype = routetype
    if speed:
        group.speed = speed
    if distance:
        group.distance = distance
    if photo:
        group.photo = photo
    if cover:
        group.cover = cover

    db.session.commit()

    return jsonify(group.serialize()), 200
    


# endpoint unirse a grupo
# como parametro entra el grupo. El user lo coge con el token
@api.route("/add_group/<int:groupId>" , methods=['POST'])
@jwt_required()
def add_to_group(groupId):
    userEmail = get_jwt_identity()
    user_to_add = User.query.filter_by(email=userEmail).first()
    group_to_add = Group.query.get(groupId)
    

    # No da mensaje de error si el usuario ya existe en el grupo, pero 
    # directamente si ya está, no lo añade
    # seria importante desde el front hacer que si el user ya está en grupo
    # el boton de unirse aparezca DISABLED

    user_to_add.groups.append(group_to_add)
    db.session.commit()

    users_quantity = len(group_to_add.users)
    group_info = {"name":group_to_add.name , "city":group_to_add.city , "speed":group_to_add.speed , "distance":group_to_add.distance, "routetype":group_to_add.routetype ,"users_quantity":users_quantity , "id": group_to_add.id}
   
    # return jsonify(group_to_add.serialize()), 200
    return jsonify(group_info), 200


# endpoint salirse de un grupo
# como parametro entra el grupo. El user lo coge con el token
@api.route("/leave_group/<int:groupId>" , methods=['DELETE'])
@jwt_required()
def leave_group(groupId):
    userEmail = get_jwt_identity()
    user_to_leave = User.query.filter_by(email=userEmail).first()
    group_to_leave = Group.query.get(groupId)

    # Falta ver como meter el mensaje de error si el user no pertenece ya a ese grupo
    # ahora mismo si no está en grupo, da estado 500

    # Este codigo de abajo no sirve para eliminar el error:
    # if user_to_leave not in group_to_leave:
    #     return jsonify ("msg: usuario no pertenece al grupo"), 400

    user_to_leave.groups.remove(group_to_leave)
    db.session.commit()

    # users_quantity = len(group_to_leave.users)
    # group_info = {"name":group_to_leave.name , "city":group_to_leave.city , "speed":group_to_leave.speed , "distance":group_to_leave.distance, "routetype":group_to_leave.routetype ,"users_quantity":users_quantity , "id": group_to_leave.id}
   
    # return jsonify(group_info), 200
    return jsonify("msg: usuario eliminado del grupo"), 200

   

#crear comentarios
@api.route("/comment/<int:groupId>", methods=["POST"])
@jwt_required()
def create_comment(groupId):
    body = json.loads(request.data)
    userEmail = get_jwt_identity()
    user = User.query.filter_by(email=userEmail).first()
    group = Group.query.get(groupId)


    if not body["text"]:
        return jsonify({"msg": "Formato erroneo"}), 404 

    
    comment = Comment(text=body["text"], user_id=user.id, group_id=group.id)

    db.session.add(comment)
    db.session.commit()

    comment_info = {"text":comment.text , "user_id":user.id , "group_id": group.id , "id":comment.id , "datetime":comment.date}

    # return jsonify(comment.serialize()),200
    return jsonify(comment_info), 200


#borrar comentarios
@api.route("/comment_delete/<int:commentId>", methods=["DELETE"])
@jwt_required()
def delete_comment(commentId):
    
    userEmail = get_jwt_identity()
    user = User.query.filter_by(email=userEmail).first()
    comment = Comment.query.get(commentId)

    db.session.delete(comment)
    db.session.commit()

    return jsonify("msg: comentario borrado"), 200



#recuperar comentarios de un grupo. Ya devuelve los nombres del user que publica comentario también
@api.route('/get_comment/<int:groupId>', methods=['GET'])
def group_comments(groupId):
    
    # current_group = Group.query.get(groupId)

    comment = Comment.query.filter_by(group_id=groupId).all()
    # print (comment)

    # EL ** sirve para unir los 2 objetos
    comentarios = list(map(lambda item: {** item.serialize(), **item.serialize2()}, comment))
    # print (comentarios)

    if comentarios == []:
    #    return jsonify("msg: no hay mensajes"), 400
       return jsonify(comentarios), 404

    return jsonify(comentarios), 200

    # if not current_group:
    #     return jsonify("msg: Error. Grupo no encontrado"), 404

    # group_comments = current_group.comments
    # ids = list(map(lambda item: item.user_id, group_comments))
    # # print (id)

    # namelist = list(map(lambda item: User.query.get(item), id))
    # names = list(map(lambda item: item.name, namelist))
    
    # print (names)
    # # comments2 = []
    # # for name in names:
    # #     comments2 += [{"username":name}]
    
    # comments = []

    # map(lambda item, name: item.name=name, ids, names)
    
    # for comment in group_comments : 
    #     for name in names:
            
    #         comments += [{"text":comment.text , "id":comment.id ,"user.id":comment.user_id,"user.name":name , "datetime":comment.date}]
   
    # if comments == []:
    #     return jsonify("msg: no hay mensajes"), 400

    # return jsonify(comments), 200


#recuperar grupos de un user
@api.route('/get_usergroups', methods=['GET'])
@jwt_required()
def usergroups():
    userEmail = get_jwt_identity()
    user = User.query.filter_by(email=userEmail).first()

    groups_added = user.groups
    groups = []

    for group in groups_added : 
        groups += [{"name": group.name, "city": group.city , "routetype": group.routetype , "speed": group.speed , "distance": group.distance , "group_id":group.id}]

    return jsonify(groups), 200


# restablecer contraseña por mail
# revisar porque no consigo atrapar los fallos si no hay mail o si el mail no existe
# ahora mismo dan error 500
# mirar tambien cerrar todas las sesiones al cambiar la pass, con Flask-Security-Too
@api.route("/forgotpassword", methods=["POST"])
def forgotpassword():
    recover_email = request.json["email"]
    # aqui saco una nueva contraseña aleatoria
    recover_password = "".join(random.choice(string.ascii_uppercase + string.digits)for x in range(10))

    if not recover_email:
        return jsonify({"msg":"Debe ingresar el correo"}), 401
    user = User.query.filter_by(email=recover_email).first()
    if recover_email != user.email:
        return jsonify({"msg": "El correo no existe en nuestra BBDD"}), 400
    # encripto la contraseña nueva aleatoria y la guardo en el user
    hashed = bcrypt.hashpw(recover_password, bcrypt.gensalt())
    user.password = hashed
    db.session.commit()
    # se la envio al usuario por mail
    with current_app.app_context():
        mail = Mail() 
    
        msg = Message("Password restored",
                  sender="bikemateapp@gmail.com",
                  recipients=[user.email])
        msg.body = "Hello " + (user.name) + ", your new password is: " + (recover_password)
        msg.html = "<h1>Hello " + (user.name) + "</h1> <br> <p>Your new password is: </p>" + (recover_password)

        mail.send(msg)
    return jsonify({"msg": "Enviada nueva contraseña al correo electronico ingresado"})


# publicar una nueva ruta. Necesita token para estar logueado
@api.route('/new_route/<int:groupId>', methods=['POST'])
@jwt_required()
def route(groupId):
    
    userEmail = get_jwt_identity()
    user = User.query.filter_by(email=userEmail).first()
    body = json.loads(request.data)
    group = Group.query.get(groupId)
    geo = Nominatim(user_agent="MyApp")

    aditional_info = body["info"]
    lugar = body["address"]
    loc = geo.geocode(lugar)
    latitud = (loc.latitude)
    longitud = (loc.longitude)
    print (latitud, longitud)
    # iframe = "https://maps.google.com/?ll="+ (latitud) + "," + (longitud) +"&z=14&t=m&output=embed" 

    meeting = Meeting(address=body["address"], date=body["date"], latitude=latitud , longitude=longitud, group_id=group.id, aditional_info=aditional_info) 

    db.session.add(meeting)
    db.session.commit()

    return jsonify(meeting.serialize())
# <iframe class="iframe" src="https://maps.google.com/?ll=latitude,longitude&z=14&t=m&output=embed" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>



# obtener TODAS las rutas de un grupo
@api.route('/routes/<int:groupId>', methods=['GET'])
def group_routes(groupId):
    
    group = Group.query.get(groupId)
    routes = group.meetings
    all_routes = []
   
    # iframe = "https://maps.google.com/?ll="+ (latitud) + "," + (longitud) +"&z=14&t=m&output=embed" 

    for route in routes:
        all_routes += [{"id":route.id , "address":route.address , "date":route.date , "latitude": route.latitude , "longitude": route.longitude , "info":route.aditional_info}]
   
    return jsonify(all_routes), 200
# <iframe class="iframe" src="https://maps.google.com/?ll=latitude,longitude&z=14&t=m&output=embed" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>



# borrar ruta
@api.route("/delete_meet/<int:meetingId>" , methods=['DELETE'])
@jwt_required()
def delete_meet(meetingId):
    userEmail = get_jwt_identity()
    user = User.query.filter_by(email=userEmail).first()
    meet_to_delete = Meeting.query.get(meetingId)

    db.session.delete(meet_to_delete)
    db.session.commit()

    return jsonify({"msg": "ruta eliminada"}), 200