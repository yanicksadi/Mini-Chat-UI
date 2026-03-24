import {useState, useEffect} from 'react'


function MiniChat(){

  return(
    <div>
      <input className="border flex-1 p-2 mt-10 ml-10" placeholder="send a message to Chatbot" size="30"/>

      <button className="bg-green-600 border p-2 ml-2 rounded">
        Send
      </button>
    </div>
  );
}
export default MiniChat