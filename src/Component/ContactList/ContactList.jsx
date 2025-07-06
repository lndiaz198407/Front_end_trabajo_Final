import React, { useContext } from "react"
import ContactItem from "../ContactItem/ContactItem"
import { ContactContext } from "../../Context/ContactContext"
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner"
import { MessageSquarePlus, MoreVertical} from 'lucide-react';
import "../../styles/styles.css"


const ContactsList = () => {
    const {contacts, isLoadingContacts} = useContext(ContactContext)
    if(isLoadingContacts){
        return (
            <LoaderSpinner/>
        )
    }
    return (
            
                <div className="whatsapp-container">
                            <div className="left-panel">
                                    <div className="panel-header">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
                                            alt="User Avatar"
                                            className="header-avatar"
                                        />
                                        <div className="header-icons">
                                            <MessageSquarePlus  className="header-icon" />
                                            <MoreVertical  className="header-icon" />
                                        </div>
                                      
                                        
                


                                    </div>
                            
                                    <div className="chat-list">
                                        {
                                            contacts.map(
                                                (contact) => {
                                                return <ContactItem
                                                            key={contact.id}
                                                            id={contact.id}
                                                            name={contact.name}
                                                            last_time_connected={contact.last_time_connected}
                                                            img={contact.img}
                                                            last_message={contact.last_message}
                                                            unread_messages={contact.unread_messages}
                                                            />

                                                }
                                            )
                                    }
                                    </div>
                            </div>
                                 
                    </div>
       
        
    )
}

export default ContactsList