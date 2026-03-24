import {useEffect,useState} from 'react'
import chatbot from '../assets/chatbot.png'
import user from '../assets/user.png'
function ChatMessage({message, sender}){

  // const message = props.message;
  // const sender = props.sender;
  // const {message,sender} = props;

  // if(sender === 'robot'){
  //   return (
  //     <div className="flex mt-10">
  //       <img src={chatbot}  className="w-12.5 ml-10 gap-2" />
  //       {message}
  //     </div>
  //   );
  // }
  return(

    <div className="flex mt-10">
      {sender === 'robot' && (
        <img src={chatbot} className="w-12.5 ml-10 gap-2"/>
        )}
      {message}
      {sender === 'user' && (
        <img src={user}  className="w-12.5 ml-10 gap-2" /> 
      )}
    </div>
  );
}

export default ChatMessage