import { PicCenterOutlined, PictureOutlined, SendOutlined } from '@ant-design/icons'
import React,{useState} from 'react'
import {sendMessage , isTyping } from 'react-chat-engine'

const MessageForm = (props) => {

    const [value, setValue] = useState(' ')
    const{chats, creds} = props
    /*
        we need chatid from chat object 
        so we extract thar using Object.keys()[0] 
        -->0 returns the first "key" value 
     */
    var chatId = Object.keys(chats)[0] 

    const handleSubmit = (e)=>{
        e.preventDefault() //prevents browser refresh
        const text = value.trim();

        if(text.length > 0){
            // console.log(text+ "is here");
            sendMessage(creds,chatId,{text})
        }

        setValue(' ')
    }
    const handleChange = (event)=>{
        setValue(event.target.value)
       isTyping(props,chatId)
    }
    const handleUpload = (event)=>{
        sendMessage(creds,chatId,{files:event.target.files,text:' '})
    }
    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                className="message-input"
                placeholder="send a message"
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlfor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon" />
                </span>
           
            <input
                type="file"
                multiple={false}
                id="upload-button"
                style={{display:'none'}}
                onChange={handleUpload}
            />
             </label>
             <button type="submit" className="send-button">
                <SendOutlined className="send-icon" />
              </button>
        </form>
    )
}

export default MessageForm
