import React, { useContext, useEffect } from 'react'
import Chat from '../../Component/Chat/Chat'
import NewMessageForm from '../../Component/NewMessageForm/NewMessageForm'
import { Link, useParams } from 'react-router';
import { MessagesContext } from '../../Context/MessagesContext';
import LoaderSpinner from '../../Component/LoaderSpinner/LoaderSpinner';
import "../../styles/styles.css"
import { Phone, Video, MoreVertical, UserPen, ChevronLeft} from 'lucide-react';
import { ContactContext } from '../../Context/ContactContext';
import { getContactById } from '../../services/contactService';

 // componente que realiza la carga del HTML de los mensajes 
export default function HomeScreen() {

    //Capturamos el valor de id de contacto de la URL usando la funcion useParams
    const {contact_id} = useParams()
    const {loadMessages, isMessagesLoading} = useContext(MessagesContext)
    const {contacts, markMessagesAsRead} = useContext(ContactContext)

    useEffect(
        () => {
            loadMessages(contact_id);
            markMessagesAsRead (contact_id);
        },
        [contact_id]
    )

    if(isMessagesLoading){
        return <LoaderSpinner/>
    }

    // Encuentra el contacto específico
     const foundContact = getContactById(contacts, contact_id);

    return (
        <div>
           <div className="panel-messages">
                <header className="panel-header">
                    <nav className="chat-header-info">
                        <Link to={`/contacts`}>
                            <ChevronLeft  className="header-icon" />
                        </Link>
                         <Link to={`/contact-detail/${contact_id}/detail`}>
                            <div className="chat-header-info">
                                <img src={foundContact.img} alt="" className="header-avatar" />
                            
                                <p className="chat-header-name">{foundContact.name}</p>
                                
                            </div>
                        </Link>

                        
                    </nav>
                     <nav className="header-icons">
                        <Video  className="header-icon" />
                        <Phone className="header-icon" />
                        <Link to={`/contact-detail/${contact_id}/detail`}>
                        < UserPen className="header-icon" />
                        </Link>
                        <MoreVertical className="header-icon" />
                    </nav> 
                </header>
                <div className="message-area">
                   <Chat />       
                </div>
            <NewMessageForm/>
            </div> 
            
        </div>
        
    )
}


