from peewee import *
import datetime



#login/logout
# see docs--> flask-login.readthedocs.io/en/latest/
from flask_login import UserMixin

DATABASE = SqliteDatabase('kelperDB.sqlite')

######################################################
class User(UserMixin, Model):
    username = CharField(unique=True)
    email = CharField(unique=True)
    password = CharField()
    company = CharField()
    location = CharField()
    employee_title = CharField()
  #???  inbox = CharField() 



    class Meta:
        database = DATABASE 
####################################################
class Client(Model):
    name = CharField()
 

    class Meta:
        database = DATABASE
# def initialize():
#     DATABASE.connect()
####################################################

class Incident(Model):
    employee_data_ref = ForeignKeyField(User, backref='employeee_info')
    
    client_referrence = ForeignKeyField(Client, backref='reports')
    

    incident_event = CharField()

    created_at = DateTimeField(default=datetime.datetime.now)


    # owner = ForeignKeyField(User, backref='dogs')

    # # this ForeignKeyField will let us go some_dog.owner to get user that owns this dog

    #     #the backref will let us go some_user.dogs to get a list of dogs owner by that user




    class Meta:
        database = DATABASE

######################################################

class Messages(Model):
    sender = CharField(unique=True)
    reciever = CharField(unique=True)
    message = CharField()
  #???  inbox = CharField() 



    class Meta:
        database = DATABASE 
# def initialize():
#     DATABASE.connect() 
######################################################
# class Redemption(Model):
#     sender = CharField(unique=True)
#     reciever = CharField(unique=True)
#     message = CharField()
#   #???  inbox = CharField() 



#     class Meta:
#         database = DATABASE 

def initialize():
    DATABASE.connect() 
######################################################

    DATABASE.create_tables([User, Client, Incident, Messages], safe=True)
    print("Connected to the DB and created tables if they didnt already exist")


    DATABASE.close()