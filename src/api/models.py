from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

user_groups = db.Table('user_groups',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('group_id', db.Integer, db.ForeignKey('group.id'), primary_key=True)
)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(250), unique=False, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=False)
    city = db.Column(db.String(120), unique=False, nullable=True)
    bikemodel = db.Column(db.String(120), unique=False, nullable=True)
    routetype = db.Column(db.String(120), unique=False, nullable=True)
    speed = db.Column(db.Integer, nullable=True) #Podemos dejar velocidad media como nula en usuarios por si no saben dato
    distance = db.Column(db.Integer, nullable=True) #Podemos dejar velocidad media como nula en usuarios por si no saben dato
    comments = db.relationship('Comment', backref='user', lazy=True)
    groups = db.relationship('Group', secondary=user_groups, lazy='subquery',
        backref=db.backref('users', lazy=True))


    # username = db.Column(db.String(80), unique=False, nullable=False)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "city": self.city,
            "speed": self.speed,
            "distance": self.distance,
            "bikemodel": self.bikemodel,
            "routetype": self.routetype
            # do not serialize the password, its a security breach
        }


class Group(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    city = db.Column(db.String(120), unique=False, nullable=False)
    routetype = db.Column(db.String(120), unique=False, nullable=True)
    speed = db.Column(db.Integer, nullable=False) 
    distance = db.Column(db.Integer, nullable=False) #Aqui distancia y velocidad no deberian poder dejarse en blanco porque la idea es que el usuario busque grupos del nivel que quiera
    comments = db.relationship('Comment', backref='group', lazy=True)
    

    def __repr__(self):
        return f'<Group {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "city": self.city,
            "speed": self.speed,
            "distance": self.distance,
            "routetype": self.routetype
            # do not serialize the password, its a security breach
        }


class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(500), unique=False, nullable=False)
    date = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),
        nullable=False) 
    group_id = db.Column(db.Integer, db.ForeignKey('group.id'),
        nullable=False) 

    def __repr__(self):
        return f'<Comment {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "text": self.text,
            "date": self.date,
            
        }