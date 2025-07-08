import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext'
import { Trash2} from 'lucide-react';


/* En este componente se cargan se reciben los datos del mensages y se genera el HTML con los mismos */
export default function Message({ emisor, hora, id, texto, status}) {

    
    const {handleEliminarMensaje} = useContext(MessagesContext)

    const classNames = {
        message: 'chat-dialog',
        colorBox: 'message-date-separator',
        status: 'message-status',
    }
    if(emisor === 'YO'){
        classNames.message = classNames.message + ' chat-dialog__my-message'
        classNames.colorBox = classNames.colorBox + ' chat-dialog__my-message-color-box'
        classNames.status = classNames.status + ' my-message-status'
    }
    if ( status === 'visto'){
        classNames.status= classNames.status + ' my-message-status-blue'
    }


    return (
        <div className={classNames.message} >
            <span className={classNames.colorBox}> 
                <p className='message-text'>{texto}</p>
                <span className="message-time">{hora}</span>
                <span className={classNames.status}>✔✔</span>
                <div onClick={() => {handleEliminarMensaje(id)}}  ><Trash2 className="message-delete"></Trash2></div> 
            </span>
                
            
        </div>
    )
}
