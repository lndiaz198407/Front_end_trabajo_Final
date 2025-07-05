import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext'
import "../../styles/styles.css"
import { Smile, Paperclip, Send } from 'lucide-react';
export default function NewMessageForm() {
    /* const result = useContext(MessagesContext)
    alert(result.dato) */
    const {addNewMessage} = useContext(MessagesContext)
    const handleSubmitNewMessage = (e) => {
        //Esta funcion se encarga de manejar el envio del formulario
        e.preventDefault()
        let new_text = e.target.text.value
        addNewMessage(new_text)
        e.target.text.value = '' //Borrar el mensaje enviado del formulario
        //Otra forma de resetar el form
        //e.target.reset()
    }
    return (
        <form onSubmit={handleSubmitNewMessage}>
            <div className="message-input-area">
                <Smile size={24} className="input-icon" />
                <Paperclip size={24} className="input-icon" />
                <textarea id='text' name='text' minLength={5} required className="message-input"></textarea>
            
            <button type='submit' className="send-button" >
                <Send size={24} />
            </button>
            </div>
        </form>
    )
}
