import React, { useState } from 'react';
import './MessageSender.css'
//import firebase from 'firebase'
import { doc, onSnapshot, collection, query, orderBy, addDoc, Timestamp, serverTimestamp  } from "firebase/firestore";  
// icons
import { Avatar } from '@material-ui/core'
import { Videocam, PhotoLibrary, InsertEmoticon} from '@material-ui/icons'

// context api
import { useStateValue } from '../../../state/Provider'

// database
import db from '../../../firebase'

const MessageSender = () => {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        // send data to database
        /*db.collection('posts').add({
            message: input,
            //timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })*/
        addDoc(collection(db, "posts"), {
            message: input,
            timestamp: serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
          });

        // clear form
        setInput('');
        setImageUrl('');
    }
    return (
        <div className="messageSender">
            <div className="messageSenderTop">
                <Avatar src={user.photoURL} />
                <form>
                    <input 
                        value={input} 
                        onChange={e => setInput(e.target.value)} 
                        className="messageSenderInput" 
                        placeholder={`What's on your mind, ${user.displayName}?`} 
                    />
                    <input
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)} 
                        placeholder={"Image URL (Optional)"} />
                    
                    <button onClick={handleSubmit} type="submit">Hidden submit</button>


                </form>
            </div>

            
        </div>
    )
}

export default MessageSender;
