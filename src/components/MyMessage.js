import React from 'react'

const MyMessage = ({message}) => {
    console.log(message);
    if(message?.attachments?.length >0){
        return(
            <img
                src={message?.attachments[0]?.file}
                className="message-image"
                style={{float:'right'}}
            />
        )
    }
    return (
        <div className="message" style={{float:'right',marginRight:'18px',color:'white',background:'purple'}}>
           {message?.text}
        </div>
    )
}

export default MyMessage
