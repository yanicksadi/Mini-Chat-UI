import React from 'react';
import ChatMsg from './ChatMsg';




function DisplayMessage({ chatMessages, setChatMessages }) {

  const [inputText, setInputText] = React.useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

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

  const response = Chatbot.getResponse(inputText);
  setChatMessages(
      [
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]
    );

  setInputText('')
  }

  return (
    <div>
      <input
        className="border flex-1 p-2 ml-10"
        placeholder="send a message to Chatbot"
        size="30"
        value={inputText}
        onChange={saveInputText}
      />

      <button
        onClick={sendMessage}
        className="bg-green-600 border p-2 ml-2 rounded"
      >
        Send
      </button>

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
  );
}

export default DisplayMessage;