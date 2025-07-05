import React from "react"
import { Link} from "react-router"
import "../../styles/styles.css"
const ContactItem = ({name, id, last_time_connected, img, last_message, unread_messages}) => {
    
    return (
        <Link to={`/contacts/${id}/messages`}>
            {/* <a href="/home"> */}{/* el elemento <a></a> Recarga la pagina */}
            <div className="chat-item">
                <div className="chat-item-header">
                    <img src={img} alt={`${name} image profile`} className="header-avatar"/>  
                    <span className="chat-item-name">
                            {name}
                    </span>
                </div>
                
                <div className="chat-item-content">
                        <span className="chat-item-time">
                            {last_time_connected}
                        </span>
                    <div className="chat-item-info">
                        <span className="chat-item-message">
                            {last_message.text}
                        </span>
                        <span >
                            {unread_messages}
                        </span>
                    </div>
                 
                </div>    
            </div>
                
        </Link>
        
        
    )
}

export default ContactItem