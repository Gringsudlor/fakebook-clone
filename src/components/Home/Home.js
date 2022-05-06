import React, {useState, useRef, useEffect} from 'react';
import './Home.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Feed from '../Feed/Feed';
import Widgets from '../Widgets/Widgets';

import { useStateValue } from '../../state/Provider'

import { BrowserRouter as Router, Switch, Routeม, useHistory } from "react-router-dom"
import { AuthProvider, useAuth } from "../../state/AuthContext"
import Login from '../Login/Login';


export default function Home() {
    const didMountRef = useRef(false)
    const [ loading, setLoading ] = useState(true)
    const { user } = useAuth()
    const history = useHistory()
  
    useEffect(() => {
      if (!didMountRef.current) {
        didMountRef.current = true

        if (!user || user === null) {
          history.push("/")
          return
        }
  
      }   
    }, [user, history])
    
  
    //if (!user || loading) return <div />
  
    return (
        <div className="home">
          <Header />  
            <div className="homeBody">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </div>
    )
  }