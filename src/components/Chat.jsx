// import React, { useEffect, useState } from "react";
// import { db } from "../firebase/firebase";
// import { collection, addDoc, onSnapshot } from "firebase/firestore";

// import Message from "./Message";
// import Input from "./Input";

// const Chat = () => {

//   const [messages,setMessages] = useState([]);

//   const user = "Jamshid";

//   useEffect(()=>{

//     const unsub = onSnapshot(collection(db,"messages"),(snapshot)=>{
//       const data = snapshot.docs.map(doc=>doc.data());
//       setMessages(data);
//     })

//     return ()=>unsub()

//   },[])


//   const sendMessage = async (text) =>{
//     await addDoc(collection(db,"messages"),{
//       text,
//       user,
//       time:Date.now()
//     })
//   }

//   return (
//     <div>

//       <h2>Chat</h2>

//       {messages.map((msg,i)=>(
//         <Message key={i} msg={msg}/>
//       ))}

//       <Input sendMessage={sendMessage}/>

//     </div>
//   );
// };

// export default Chat;
