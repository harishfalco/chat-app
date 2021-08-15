import React from 'react'

const TheirMessage = ({lastMessage , message}) => {

    const isFirstMessage =  lastMessage?.sender?.username !== message.sender.username
    return (
        <div className="message-row">
            {
                isFirstMessage &&(
                    <div
                        className="message-avatar"
                        style={{backgroundImage:`url(${message?.sender?.avatar})`}}
                    />

                )
            }
            {
                message?.attachments?.length > 0 
                  ?
                        <img
                            src={message?.attachments[0]?.file}
                            className="message-image"
                            style={{ marginLeft: isFirstMessage? '4px' : '48px' }}
                        />
                  :(
                    <div className="message" style={{float:'left',background:'#CABCDC',marginLeft : isFirstMessage ? '4px': '448px'}}>
                      {message?.text}
                    </div>
                  ) 
            }
        </div>
    )
}

export default TheirMessage
