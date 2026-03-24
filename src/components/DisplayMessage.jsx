import {useEffect,useState} from 'react'
import ChatMsg from './ChatMsg'
function DisplayMessage(){
  const chatMessages = [{
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
]

 return(
    <div>
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

  );
}

export default DisplayMessage