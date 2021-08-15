import React from 'react'
import MyMessage from './MyMessage.js'
import TheirMessage from './TheirMessage.js';
import MessageForm from './MessageForm'
import { render } from '@testing-library/react';
const ChatFeed = (props) => {
const {chats, activeChat , userName , messages} = props;

const chat = chats && chats[activeChat]

const renderReadReceipts = (message,isMyMessage)=>{
    chat.people.map(
        (person,index)=>person.last_read === message.id &&(
            <div
                key={`read_${index}`}
                className="read-receipt"
                style={
                    {
                        float:isMyMessage ? 'right' : 'left',
                        backgroundImage:`url(${message?.sender?.avatar})`
                    }
                }
            />
        )
    )
}
 
const renderMessages  = ()=>{
    const keys = Object.keys(messages);
    return keys.map((key,index)=>{
        const message = messages[key];
        const lastMessageKey = index === 0 ? null : keys[index - 1];
        const isMyMessage = userName === message?.sender?.username;
        
        return(
            <div>
                <div className='message-block'>
                    {
                        isMyMessage
                        ?
                        <MyMessage message={message}/>
                        :
                        <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
                    }
                   
                </div>
                <div className="read-recepits" style={{marginRight:isMyMessage ? '18px' : '0px', marginLeft : isMyMessage ?'0px' :'68px'}}>
                       {
                           renderReadReceipts(message,isMyMessage)
                       }
                </div>

            </div>
        )
    })
}
renderMessages()
if(!chat) return 'Loading...'
    return (
        <div className="chat-feed">
            <div className="chat-title-conatiner">
                <div className="chat-title">
                      {chat?.title}
                </div>
                </div> 
            <div className="chat-subtitle">
                {chat.people.map((person)=> `  ${person.person.username}`)}
            </div>
            {renderMessages()}
            <div style={{height:'100px'}}>
                <div className="message-form-container">
                       <MessageForm {...props} /> 
                </div>
            </div>
        </div>
    )
}

export default ChatFeed
