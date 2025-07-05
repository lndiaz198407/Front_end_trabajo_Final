import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext'

export default function Message({ emisor, hora, id, texto, status}) {
    //Mostrar por consola el dato guardado en el contexto de mensajes
    //useContext es una funcion de react que me permite usar un contexto
    //Recibe por parametro el contexto a consumir
    //useContext devuelve el valor del la propiedad value del contexto proveedor
    /* const result = useContext(MessagesContext)
    console.log(result) */
    const {handleEliminarMensaje} = useContext(MessagesContext)

    const classNames = {
        message: 'chat-dialog',
        colorBox: 'message-date-separator',
    }
    if(emisor === 'YO'){
        classNames.message = classNames.message + ' chat-dialog__my-message'
        classNames.colorBox = classNames.colorBox + ' chat-dialog__my-message-color-box'
    }
    return (
        <div className={classNames.message} >
            <span className={classNames.colorBox}> 
                <p className='message-text'>{texto}</p>
                <span className="message-time">{hora}</span>
                <span >✔✔</span>
                <button onClick={() => {handleEliminarMensaje(id)}} >d</button> 
            </span>
                
            
        </div>
    )
}
