import React, { useContext, useEffect } from 'react'
import Chat from '../../Component/Chat/Chat'
import NewMessageForm from '../../Component/NewMessageForm/NewMessageForm'
import { Link, useParams } from 'react-router';
import { MessagesContext } from '../../Context/MessagesContext';
import LoaderSpinner from '../../Component/LoaderSpinner/LoaderSpinner';
import "../../styles/styles.css"
 import { Phone, Video, MoreVertical, UserPen, ChevronLeft} from 'lucide-react';
 import { ContactContext } from '../../Context/ContactContext';

 
export default function HomeScreen() {

    //Capturamos el valor de id de contacto de la URL usando la funcion useParams
    const {contact_id} = useParams()
    const {loadMessages, isMessagesLoading} = useContext(MessagesContext)
    const {contacts} = useContext(ContactContext)

    useEffect(
        () => {
            loadMessages(contact_id)
        },
        [contact_id]
    )

    if(isMessagesLoading){
        return <LoaderSpinner/>
    }

    // Encuentra el contacto específico
    const foundContact = contacts.find(contact => contact.id === Number(contact_id));

    return (
        <div>
           <div className="right-panel">
                <header className="panel-header">
                    <nav className="chat-header-info">
                        <Link to={`/contacts`}>
                            <ChevronLeft  className="header-icon" />
                        </Link>
                        
                        <img src={foundContact.img} alt="" className="header-avatar" />
                        <div>
                            <p className="chat-header-name">{foundContact.name}</p>
                            
                        </div>
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


