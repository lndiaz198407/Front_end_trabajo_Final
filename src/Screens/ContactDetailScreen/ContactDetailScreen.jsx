import React, { useContext }  from 'react'
import "../../styles/styles.css"
import { Link, useParams } from 'react-router'
import { ContactContext } from '../../Context/ContactContext';
import {ArrowLeft , MoreVertical , Phone, Video, Search, Bell , EyeOff, Bookmark, Lock } from 'lucide-react';
import { getContactById } from '../../services/contactService';

export default function ContactDetailScreen() {
const {contact_id} = useParams()
const {contacts} = useContext(ContactContext)




// Encuentra el contacto específico
const foundContact = getContactById(contacts, contact_id);



  return (

    <div className='profile-main-container'>
      {foundContact ? (
      <div className="profile-card-wrapper">
        <header className="header-bar">
          <Link to={`/contacts/${contact_id}/messages`}>
          <ArrowLeft className="header-icon" />
          </Link>
      
          <MoreVertical className="header-icon" />
        </header>
       
        <section className="profile-info-section">
          <div className="profile-picture-container">
            <img  src={foundContact.img} alt={`${foundContact.name} Imagen de perfil`} className="profile-picture-image" />
          </div>
          <h1 className="profile-name">
            {foundContact.name}
          </h1>
        </section >

        <section className="action-buttons-section" >
          <div className="action-button-item">
            <div className="action-button-icon-wrapper">
              <Phone className="action-button-icon" />
            </div>
            <span className="action-button-text">Llamar</span> 
          </div>
          <div className="action-button-item">
            <div className="action-button-icon-wrapper">
              <Video className="action-button-icon" />
            </div>
            <span className="action-button-text">Video</span>
          </div>
          <div className="action-button-item">
            <div className="action-button-icon-wrapper">
              <Search className="action-button-icon" />
            </div>
            <span className="action-button-text">Buscar</span>
          </div>
        </section>
     
        <section className="list-items-section">
        
          <div className="list-item">
            <Bell className="list-item-icon" />
            <div className="list-item-content">
              <p className="list-item-title">Notificaciones</p>
            </div>
          </div>

         
          <div className="list-item">
            <EyeOff className="list-item-icon" />
            <div className="list-item-content">
              <p className="list-item-title">Visibilidad de archivos multimedia</p>
              <p className="list-item-subtitle">Desactivada</p>
            </div>
          </div>

        
          <div className="list-item">
            <Bookmark className="list-item-icon" />
            <div className="list-item-content">
              <p className="list-item-title">Mensajes conservados</p>
            </div>
          </div> 

         
          <div className="list-item ">
            <Lock className="list-item-icon" />
            <div className="list-item-content">
              <p className="list-item-title" >Cifrado</p>
              <p className="list-item-subtitle">Los mensajes y las llamadas están cifrados de extremo a extremo. Toca para verificarlo</p>
            </div>
          </div>
        </section>
      </div>
      ):
      (
        <p>Contacto no encontrado.</p> // Mensaje si no se encuentra ningún contacto
      )}
    </div>
    
    

    
  );
}
