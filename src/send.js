import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

async function sendMessage(text,user){
  await addDoc(collection(db,"messages"),{
    text,
    user,
    time:Date.now()
  })
}
