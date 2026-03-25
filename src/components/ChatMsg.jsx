import chatbot from '../assets/chatbot.png'
import user from '../assets/user.png'

function ChatMsg({ message, sender }) {
  return (
    <div className="flex ml-16 mt-10 items-center">
      {sender === 'robot' && (
        <img src={chatbot} className="w-[30px] mr-10" />
      )}

      <p>{message}</p>

      {sender === 'user' && (
        <img src={user} className="w-[30px] ml-10" />
      )}
    </div>
  );
}

export default ChatMsg;