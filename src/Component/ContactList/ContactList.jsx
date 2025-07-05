import React, { useContext } from "react"
import ContactItem from "../ContactItem/ContactItem"
import { ContactContext } from "../../Context/ContactContext"
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner"
import { MessageSquarePlus, MoreVertical, Search} from 'lucide-react';


import "../../styles/styles.css"
import HomeScreen from "../../Screens/HomeScreen/HomeScreen";

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
                                            src="https://placehold.co/40x40/28a745/ffffff?text=You"
                                            alt="User Avatar"
                                            className="header-avatar"
                                        />
                                        <div className="header-icons">
                                            <MessageSquarePlus size={24} className="header-icon" />
                                            <MoreVertical size={24} className="header-icon" />
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
                                    /* O mas facil <ContactItem key={contact.id} {...contact}/> */
                                                }
                                            )
                                    }
                                    </div>
                            </div>
                                 
                    </div>
       
        
    )
}

export default ContactsList