import {ChatEngine, chatEngine} from 'react-chat-engine';
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';
const App = ()=>{
    if(!localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine
            height="100vh"
            userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			projectID='2c177876-7490-461f-8833-928255c103d7'
            renderChatFeed={(chatAppProps)=><ChatFeed  {...chatAppProps} />}
        />
    );
}

export default App;
