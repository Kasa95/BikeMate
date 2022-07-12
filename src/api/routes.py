"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.models import db, User, Group, Comment
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
import json
import bcrypt
from bcrypt import hashpw
# para instalar paquete de bcrypt, para pass encriptado, instalar:
# pipenv install py-bcrypt
# pipenv install flask-jwt-extended

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


#crear usuario
@api.route("/register", methods=["POST"])
def create_user():
    body = json.loads(request.data)

    if User.query.filter_by(email=body["email"]).first():
        return jsonify({"msg": "Usuario duplicado"}), 401 

    if not body["email"] or not body["password"] or not body["name"]:
        return jsonify({"msg": "Datos incorrectos"}), 404 

    hashed = bcrypt.hashpw(body["password"], bcrypt.gensalt())
    user = User(email=body["email"], password=hashed, name=body["name"])
    

    # user = User(email=body["email"], password=body["password"], is_active=True)
    db.session.add(user)
    db.session.commit()

    response_body={
        "msg": "usuario creado"
    }
    # return jsonify(response_body), 200
    access_token = create_access_token(identity=body["email"])
    return jsonify(access_token=access_token), 200   


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
    
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)   