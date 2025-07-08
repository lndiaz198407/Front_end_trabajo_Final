import React, { useContext } from 'react'
import Message from '../Message/Message'
import { MessagesContext } from '../../Context/MessagesContext'
import '../../styles/styles.css'


/* Componente para el mapeo y carga de mensages */
export default function Chat() {
    const {messages} = useContext(MessagesContext)
    if(messages.length === 0){
        return (
            <div className="message-area">
                <span>No hay mensajes!</span>
            </div>
        )
    }
    return (
       
                messages.map((message) => {
                    return (
                        <Message 
                            key={message.id} 
                            emisor={message.emisor}
                            id={message.id}
                            hora={message.hora}
                            texto={message.texto}
                            status={message.status}
                        />
                    )
                })
         
    )
}
