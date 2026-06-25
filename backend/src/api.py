#Importing libraries
from fastapi import FastAPI
from pydantic import BaseModel
import sqlite3

from fastapi.middleware.cors import CORSMiddleware

#call api
app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#Set Structure
class User(BaseModel):
    name:str
    email:str
    password:str

class Userlogin(BaseModel):
    email:str
    password:str

class Forgetpas(BaseModel):
    email:str
    password:str


#Routes
@app.get('/')
def home():
    return{
        'message':'connection establish'
    }
#signup
@app.post('/signup')
def signup(user:User):
    con=sqlite3.connect('../database/career.db')
    cursor=con.cursor()
    try:
        cursor.execute("""
    INSERT INTO user(name,email,password) VALUES(?,?,?)                   
    """,(user.name,user.email,user.password))
        con.commit()
        con.close()
        return{
            'message':'Data Transfered'
        }
    except:
        return{
            'message':'You already registered yourself'
        }

#Login    
@app.post('/login')
def login(user:Userlogin):
    con=sqlite3.connect('../database/career.db')
    cursor=con.cursor()
    cursor.execute("""
SELECT name, email FROM user WHERE email=? AND password=?
""",(user.email,user.password))
    result=cursor.fetchone()
    con.commit()
    con.close()
    
    if result:
        name,email=result
        return{
            'message':'login success',
            'name':name,
            'email':email
        }
    return{
        'message':'invalid credential'
    }

#Forget pass
@app.post('/forgetpass')
def forgetpass(user:Forgetpas):
    con=sqlite3.connect('../database/career.db')
    cursor=con.cursor()
    cursor.execute('SELECT * FROM user WHERE email=? ',(user.email,))
    result=cursor.fetchone()
    if result:
        cursor.execute("UPDATE user SET password=? WHERE email=?",(user.password,user.email))
        con.commit()
        con.close()
        return{
            'message':'password reset succesfully'
        }
    con.commit()
    con.close()
    return{
        'message':'Please Enter Valid Email'
    }
