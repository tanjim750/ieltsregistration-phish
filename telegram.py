import requests
import datetime


class Tgram:
    """
    The `Tgram` class is a Python class that provides methods for interacting with the Telegram API,
    including sending and receiving messages, editing messages, and handling button callbacks.
    """
    __base_url = "https://api.telegram.org/bot"
    __offset = 0
    def __init__(self,token):
        self.token = token
        self.__api_url = Tgram.__base_url+self.token
        self.__get_message = "/getUpdates"
        self.__send_message = "/sendMessage"
        self.__edit_message = "/editMessageText"

    def get_messages(self):
        url = self.__api_url+self.__get_message
        parms = {"offset": Tgram.__offset}
        response = requests.get(url,params=parms).json()

        if response["ok"] and response["result"]:
            try:
                Tgram.__offset = response["result"][0]["update_id"] + 1
            except Exception as e:
                print(e)
        return response
    
    def send_message(self,chat_id,message,parser=None):
        url = self.__api_url+self.__send_message
        parms = {"chat_id":chat_id,"text":message}
        
        if parser is not None:
            parms["parse_mode"] = parser
        response = requests.post(url,params=parms).json()
        # response['result']['message_id']
        return response
    
    def edit_message(self,chat_id,message,msg_id,parser=None,buttons=None):
        url = self.__api_url+self.__edit_message
        parms = {'chat_id': chat_id, 'text': message,'message_id':msg_id}
        msg_tokens = message.split(" ")
        if (buttons is not None) and (len(msg_tokens)>30):
            keyboard = {
            'inline_keyboard': [
                    [ {'text':button["btnName"],'callback_data':button["hint"]} for button in buttons],
                ]
            }
            
            reply_markup = {
                'inline_keyboard': keyboard['inline_keyboard'],
            }

            parms['reply_markup']=reply_markup

        if parser is not None:
            parms["parse_mode"] = parser
        response = requests.post(url,json=parms).json()
        return response
    
    def send_message_with_buttons(self,chat_id, text,buttons:list = []):
        url = self.__api_url+self.__send_message
        keyboard = {
        'inline_keyboard': [
                [ {'text':button["btnName"],'callback_data':button["hint"]} for button in buttons],
            ]
        }
        
        reply_markup = {
            'inline_keyboard': keyboard['inline_keyboard'],
        }
        data = {
            'chat_id': chat_id,
            'text': text,
            'reply_markup': reply_markup,
        }
        response = requests.post(url, json=data)
        # print(response.json())
        return response.json()
    
    def button_callback_handler(self,update):
        callback_query = update['callback_query']
        chat_id = callback_query['message']['chat']['id']
        data = callback_query['data']

        return {'chat_id': chat_id, "callback_query": data}
		

