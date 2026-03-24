// import {useEffect,useState} from 'react'
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

function sendMessage(){
 chatMessages.push({
  message: 'test',
  sender: 'user',
  id: crypto.randomUUID()
 });
 console.log(chatMessages)
}

 return(
  <div>

    <div>
      <input className="border flex-1 p-2 mt-10 ml-10" placeholder="send a message to Chatbot" 
        size="30"
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