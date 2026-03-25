import chatbot from '../assets/chatbot.png'
import user from '../assets/user.png'

function ChatMsg({ message, sender }) {
  return (
      <div className={`flex items-center mb-2 ${sender === 'user' ? 'justify-end': 'justify-start'}`}>

      {sender === 'robot' && (
        <img src={chatbot} className="w-[30px] mr-2"/>
      )}
      <p className={`px-3 py-2 rounded-md max-w-xs ${sender ==='user' ? 'bg-green-600 text-white':'bg-gray-200 text-black'}`}>{message}</p>

      {sender === 'user' && (
        <img src={user} className="w-[30px] ml-2" />
      )}
      </div>
      
  );
}

export default ChatMsg;