import { onSnapshot, collection } from "firebase/firestore";

useEffect(()=>{

 const unsub = onSnapshot(collection(db,"messages"),(snap)=>{
   const data = snap.docs.map(doc=>doc.data())
   setMessages(data)
 })

 return ()=>unsub()

},[])
