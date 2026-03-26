import React, {useEffect} from 'react';
import ChatMsg from './ChatMsg';




function DisplayMessage({ chatMessages, setChatMessages }) {

  const [inputText, setInputText] = React.useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

 

    useEffect(()=>{
      if(chatMessages.length === 0) return;
      
      const lastMessage = chatMessages[chatMessages.length - 1];

      if (lastMessage.sender === 'user'){
        const response = Chatbot.getResponse(lastMessage.message);

        setChatMessages(prev =>[
          ...prev,
          {
            message: response,
            sender: 'robot',
            id: crypto.randomUUID()
          }]);
      }
    }, [chatMessages]);
  


   function sendMessage() {
    const newChatMessages =  [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ]

    setChatMessages(newChatMessages);


        // without UseEffect
  // const response = Chatbot.getResponse(inputText);
  // setChatMessages(
  //     [
  //     ...newChatMessages,
  //     {
  //       message: response,
  //       sender: 'robot',
  //       id: crypto.randomUUID()
  //     }
  //   ]
  //   );
      setInputText('')
  }



  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex w-full max-w-md gap-2 mb-6">
         <input
        className="border-[3px] p-2 rounded-md flex-grow"
        placeholder="send a message to Chatbot"
        value={inputText}
        onChange={saveInputText}
      />

      <button
        onClick={sendMessage}
        className="bg-green-600 py-2 px-4 rounded-md text-white cursor-pointer"
      >
        Send
      </button>
      </div>
     
      <div className="w-full max-w-md flex flex-col gap-3">
        {chatMessages.map((chatMessage) => {
          return (
            <ChatMsg
              key={chatMessage.id}
              message={chatMessage.message}
              sender={chatMessage.sender}
            />
          );
        })}
      </div>
    
    </div>
  );
}

export default DisplayMessage;