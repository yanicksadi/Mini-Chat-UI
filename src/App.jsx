import ChatMsg from './components/ChatMsg'
import DisplayMessage from './components/DisplayMessage'
import React from 'react'




function App(){

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
  

    return(
      <>
        {/* <ChatMsg/> */}
        <DisplayMessage/>
    </>
    
  );
}

export default App;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // import {useEffect, useState} from "react"

            // Count Activity
    // function App(){

    // const [count, setCount] = useState(0);
    // const [color, setColor] = useState("gray");



    // useEffect(() => {
    //   document.title = `Yanick: ${count} ${color}` 
    // }, [count,color])


    // function addCount(){
    //   setCount(c => c + 1);

    // }
    // function subtractCount(){
    //   setCount(c => c -1);
    //   setColor(c => c === "green" ? "blue" : "green")
    // }

    // function changeColor(){
    //   setColor(c => c === "green" ? "blue" : "green");
    // }
    // return (
    //   <div>
    //     <p style={{color:color}}>Count: {count}</p>
    //     <button className="border rounded p-2 my-10 mx-5" onClick = {addCount}>Add</button>
    //     <button className="border rounded p-2 my-10 mx-5" onClick = {subtractCount}>Subtract</button>
    //     <button className="border rounded p-2 my-10 mx-5" onClick = {changeColor}>Change COLOR</button>
    //   </div>
    // )
    // }

// ----------------------------------------------------------------------------



                       // Window Resize Activity
                                

    // function App(){

    //   const [width, setWidth] = useState(window.innerWidth);
    //   const [height, setHeight] = useState(window.innerHeight);

    //   useEffect(() => {
    //     window.addEventListener("resize",handleResize)
    //     window.removeEventListener("reset",handleResize)
    //   },[width,height])


    //   function handleResize(){
    //     setWidth(window.innerWidth)
    //     setHeight(window.innerHeight)
    //   }
    //   return(
    //     <div>
    //     <p>Window width: {width} px</p>
    //     <p>Window Height: {height} px</p>
    //     </div>
       
    //   )
    // }



    // export default App;



                  // Character  Count Activity


//     function App(){

//       const [character,setCharacter] = useState("")
      
//       useEffect(() => {
//         if(character.length >= 100){
//           alert('you have exceeded the limit');
          
//         }
//       },[character])
    
//         const remaining = 100 - character.length;
//       return (
//         <>
//          <textarea
//           value={character}
//           onChange={(e) => setCharacter(e.target.value)}
//          />
//          <p className={character.length >= 100 ? 'text-red-800' : 'text-blue-700'}>{character.length} Character</p>
//          {character > 100 && <p className="text-red-500">Limit exceeded!</p>}
//          <p>{}</p>
//         </>
//       );
//     }

// export default App


// -------------------------------------------------------------------------
                  // MiniChat UI
/////////////////////////////////////////////////////////////////////////

// function App(){

// const [message,setMessage] = useState([]);
// const [input,setInput] = useState("");

// function sendMessage(){
//   if(input.trim() === ""){
//     return;
//   }

//   const newMessage = {
//     text: input,
//     sender: "user"
//   };

//   setMessages([...message, newMessage]);
//   setInput("");

//   setTimeout(() => {
//     const botReply = {
//       text: "I'm a bot",
//       sender: "bot"
//     };

//   setMessages((prev) => [...prev, botReply]);
//   }, 1000);

// }
//   return(
//     <div className="max-w-md mx-auto mt-10 p-4 border rounded">
//       <div className="h-64 overflow-y-auto mb-4">
//       {message.map((msg, index)=>(

//         <div key={index}
//         className={msg.sender === "user" ? "text-right" : "text-left"}
//         >
//           <p className="inline-block bg-gray-200 p-2 m-1 rounded">{msg.text}</p>
//         </div>

//       ))}
//       </div>

//     <div className="flex gap-2">
//       <input className="border flex-1 p-2"
//       value={input}
//       onChange={(e) => setInput(e.target.value)}
//       />
//       <button onclick={sendMessage} className="bg-blue-500 text-white px-4">Send</button>

//     </div>

//     </div>
//   );
// }

// export default App