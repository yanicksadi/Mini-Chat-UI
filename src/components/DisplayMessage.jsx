import {useEffect,useState} from 'react'
import ChatMsg from './ChatMsg'
import React from 'react';






function DisplayMessage(){
 

const [chatMessages, setChatMessages] = React.useState([{
    message: "hello chatbot",
    sender: "user",
    id: 'id1'
  },{
    message: "hello How can i help you?", 
    sender: "robot",
    id: 'id2'
  },
  {
  message: "can you get me todays date?", 
  sender:"user",
  id: 'id3'  
  
},
  {
  message: "Today is September 27", 
  sender: "robot",
  id: 'id4'
  }
]);
// const [chatMessages, setChatMessages] = array
// const chatMessages = array[0];
// const setChatMessages = array[1]


function sendMessage(){
  setChatMessages([
    ...chatMessages,
    {
      message: 'test',
      sender: 'user',
      id: crypto.randomUUID()
    }
]);
}

const [inputText,setInputText] = React.useState('')

function saveInputText(event){
  setInputText(event.target.value)
}

 return(
  <div>

    <div>
      <input className="border flex-1 p-2 mt-10 ml-10" placeholder="send a message to Chatbot" 
        size="30"
        onChange={saveInputText}
      />

      <button onClick={sendMessage} className="bg-green-600 border p-2 ml-2 rounded">
        Send
      </button>
   
          {chatMessages.map((chatMessage)=>{
        return (
          <ChatMsg 
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
    
    
  </div>
  );
}

export default DisplayMessage