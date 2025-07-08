import React, { useContext } from "react"
import ContactItem from "../ContactItem/ContactItem"
import { ContactContext } from "../../Context/ContactContext"
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner"
import { MessageSquarePlus, MoreVertical, Search} from 'lucide-react';
import "../../styles/styles.css"
import SearchName from "../search/SearchName";


const ContactsList = () => {
    const {filteredChats, isLoadingContacts} = useContext(ContactContext)
    if(isLoadingContacts){
        return (
            <LoaderSpinner/>
        )
    }
    return (
            
                <div className="whatsapp-container">
                            <div className="panel-contacts">
                                    <div className="panel-header">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
                                            alt="User Avatar"
                                            className="header-avatar"
                                        />
                                        <SearchName/>
                                        <div className="header-icons">
                                            <MessageSquarePlus  className="header-icon" />
                                            <MoreVertical  className="header-icon" />
                                        </div>

                                    </div>
                                    {/* Search Bar */}
                          
                            
                                    <div className="chat-list">
                                        {
                                            filteredChats.map(
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