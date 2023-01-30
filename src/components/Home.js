import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

const Home = ({socket}) => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState("")
    const [pass, setPass] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("userName", userName)
        localStorage.setItem("pass", pass)
        socket.emit("newUser", {userName, socketID: socket.id})
        socket.emit("join", userName, pass)
        navigate("/chat")
    }
  return (
    <form className='home__container' onSubmit={handleSubmit}>
        <h2 className='home__header'>Zaloguj się do Chat-App</h2>
        <label htmlFor="username">Username</label>
        <input type="text" 
        name="username" 
        id='username'
        className='username__input' 
        value={userName} 
        onChange={e => setUserName(e.target.value)}
        />
        <input type="password"
        id="pass"
        className='pass__input'
        value={pass}
        onChange={e => setPass(e.target.value)}
        />
        <button className='home__cta'>Zaloguj</button>
    </form>
  )
}

export default Home