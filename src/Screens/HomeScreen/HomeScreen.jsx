import React, { useContext, useEffect } from 'react'
import Chat from '../../Component/Chat/Chat'
import NewMessageForm from '../../Component/NewMessageForm/NewMessageForm'
import { IoIosBody, IoIosBackspace } from "react-icons/io";
import Swal from 'sweetalert2'
import { useParams } from 'react-router';
import { MessagesContext } from '../../Context/MessagesContext';
import LoaderSpinner from '../../Component/LoaderSpinner/LoaderSpinner';
import "../../styles/styles.css"
 import { Phone, Video, MoreVertical, Search, Contact} from 'lucide-react';
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
    const handleClickAlertButton = () => {
		Swal.fire({
			title: 'Error!',
			text: 'Do you want to continue',
			icon: 'error',
			confirmButtonText: 'Cool'
		})
	}
  // Encuentra el contacto específico
  const foundContact = contacts.find(contact => contact.id === Number(contact_id));

    return (
        <div>
           <div className="right-panel">
                <header className="panel-header">
                    <div className="chat-header-info">
                        <img src={foundContact.img} alt="" className="header-avatar" />
                        <div>
                            <p className="chat-header-name">{foundContact.name}</p>
                            
                        </div>
                    </div>
                     <div className="header-icons">
                        <Video size={24} className="header-icon" />
                        <Phone size={24} className="header-icon" />
                        <Search size={24} className="header-icon" />
                        <MoreVertical size={24} className="header-icon" />
                    </div> 
                </header>
                <div className="message-area">
                   <Chat />       
                </div>
            <NewMessageForm/>
            </div> 
            
        </div>
        
    )
}


