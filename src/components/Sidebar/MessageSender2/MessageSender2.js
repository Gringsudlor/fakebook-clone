import React, { useState } from 'react';
import './MessageSender2.css'
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
        addDoc(collection(db, "stories"), {
            profileSrc: user.photoURL,
            title: user.displayName,
            image: imageUrl
          });
    setImageUrl('');
        }
    return (
        <div className="messageSender">
            <div className="messageSenderTop">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)} 
                        placeholder={"Image URL(For Reels Story)"} />
                    
                    <button onClick={handleSubmit} type="submit">Post here</button>


                </form>
            </div>
        </div>
            )
        }
export default MessageSender;