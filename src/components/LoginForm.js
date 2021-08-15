import React,{useState} from 'react'
import axios from 'axios'
const LoginForm = () => {
    const project_id = '2c177876-7490-461f-8833-928255c103d7'
    const [username, setUsername] = useState(' ')
    const [password, setPassword] = useState(' ')
    const [error, setError] = useState('')
    const handleSubmit = async (e)=>{
        e.preventDefault()

        //username / password => chatEngine ->give message
        //works out ? login : error
            const authObject = {'Project-ID':project_id,'User-Name':username, 'User-Secret':password}
    
            try{
               await axios.get('https://api.chatengine.io/chats',{headers:authObject})
               localStorage.setItem('username',username)
               localStorage.setItem('password',password)

               window.location.reload()

            }
            catch(e){
                setError('Oops,incorrect credentials')
            }
        }
    return (
        <div>
            <div className="wrapper">
                <div className="form">
                    <h1 className="title">
                        Chat APP
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                            className="input"
                            placeholder="username"
                        />
                        <input 
                            type="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            className="input"
                            placeholder="password"
                        />
                            <div align="center">
                                <button type="submit" className="button">
                                    <span>start</span>
                                </button>
                            </div>
                            <div className="error">{error}</div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
