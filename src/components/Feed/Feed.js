import React, { useState, useEffect } from 'react';
import './Feed.css';

// components
import StoryReel from './StoryReel/StoryReel';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';
import MessageSender2 from '../Sidebar/MessageSender2/MessageSender2';

// database
import db from '../../firebase'
import { doc, onSnapshot, collection, query, orderBy} from "firebase/firestore";  

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));


    useEffect(() => {
        //db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        //    setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
        //})
    
        onSnapshot(q, (snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        })
    } , []);

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <MessageSender2 />
            
            {
                posts.map(post => (
                    <Post 
                        key={post.id}
                        profilePic={post.profilePic}
                        message={post.message}
                        timestamp={post.timestamp}
                        username={post.username}
                        image={post.image}
                    />
                ))
            }
            {/* <Post 
                key='1'
                profilePic={arif}
                message='WOW this works!'
                timestamp='This is a timestamp'
                username='devarif'
                image={postImage}
            />
            <Post 
                key='2'
                profilePic={arif}
                message='WOW this works!'
                timestamp='This is a timestamp'
                username='devarif'
            /> */}
        </div>
    )
}

export default Feed;
