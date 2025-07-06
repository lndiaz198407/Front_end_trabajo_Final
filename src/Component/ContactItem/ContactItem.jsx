import React from "react"
import { Link} from "react-router"
import "../../styles/styles.css"
const ContactItem = ({name, id, last_time_connected, img, last_message, unread_messages}) => {
    let statusChek = '✔✔'
    const className= {
        chatCheckStatus : 'check-status',
        unreadMessages : 'chat-unreadMessage',
    }
    if (last_message.status === 'visto'){
        className.chatCheckStatus = className.chatCheckStatus + '--blue'
        className.unreadMessages= className.unreadMessages + '--visto'
    }

    return (
        <Link to={`/contacts/${id}/messages`}>
            {/* <a href="/home"> */}{/* el elemento <a></a> Recarga la pagina */}
            <div className="chat-item">
                <div className="chat-item-header">
                    <div>   
                      <img src={img} alt={`${name} image profile`} className="header-avatar"/>    
                    </div>
                    
                    <div className="chat-item-content-name">
                        <span className="chat-item-name">
                            {name}
                        </span>
                        <span className="chat-item-message">
                          <div className={className.chatCheckStatus}>{statusChek}</div>   {last_message.text}
                        </span>  
                    </div>
                    
                </div>
                
                <div className="chat-item-content">
                        <span className="chat-item-time">
                            {last_time_connected}
                        </span>
                    <div className="chat-item-info">
                        
                        <span className={className.unreadMessages}>
                            {unread_messages}
                        </span>
                    </div>
                 
                </div>    
            </div>
                
        </Link>
        
        
    )
}

export default ContactItem