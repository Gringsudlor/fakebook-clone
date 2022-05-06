import React, { useRef, useState, useEffect } from "react"

import axios from 'axios'
import { useHistory } from "react-router-dom"
import { ChatEngine } from "react-chat-engine"

import { useAuth } from "../../state/AuthContext"

import { auth } from "../../firebase"

export default function Chats() {
    const didMountRef = useRef(false)
    const [ loading, setLoading ] = useState(true)
    const { user } = useAuth()
    const history = useHistory()
  
    async function handleLogout() {
      await auth.signOut()
      history.push("/")
    }

    async function goHome() {
      history.push("/home")
    }
  
    async function getFile(url) {
      let response = await fetch(url);
      let data = await response.blob();
      return new File([data], "test.jpg", { type: "image/jpeg" });
    }
  
    useEffect(() => {
      if (!didMountRef.current) {
        didMountRef.current = true
  
        if (!user || user === null) {
          history.push("/home")
          return
        }
        
        // Get-or-Create should be in a Firebase Function
        axios.get(
          "https://api.chatengine.io/users/me",
          { headers: { 
            "project-id": "5b55f458-1ecd-4532-ad30-b1caaf0cd4c8",
            "user-name": user.email,
            "user-secret": user.uid
          }}
        )
  
        .then(() => setLoading(false))
  
        .catch(e => {
          let formdata = new FormData()
          formdata.append("email", user.email)
          formdata.append("username", user.email)
          formdata.append("secret", user.uid)
  
          getFile(user.photoURL)
          .then(avatar => {
            formdata.append("avatar", avatar, avatar.name)
  
            axios.post(
              "https://api.chatengine.io/users/",
              formdata,
              { headers: { "private-key": "479e74c1-a4c7-4f62-8c88-70b324607601" }}
            )
            .then(() => setLoading(false))
            .catch(e => console.log('e', e.response))
          })
        })
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  
      }
    }, [user, history])
    
  
    if (!user || loading) return <div />
  
    return (
      <div className='chats-page'>
        <div className='nav-bar'>
          <div onClick={goHome} className='logo-tab'>
            Fakebook
          </div>
  
          <div onClick={handleLogout} className='logout-tab'>
            Logout
          </div>
        </div>
  
        <ChatEngine 
          height="calc(100vh - 66px)"
          projectID="5b55f458-1ecd-4532-ad30-b1caaf0cd4c8"
          userName={user.email}
          userSecret={user.uid}
        />
      </div>
    )
  }