import { createContext, useState, useEffect } from "react";
import { getContactList } from "../services/contactService";



export const ContactContext = createContext({
    contacts: [],
    isLoadingContacts: true,
    searchTerm: '',
    setSearchTerm: () => {},
    filteredChats: [],
    markMessagesAsRead: (contact_id) => {}
})

const ContactContextProvider = ({children}) => {
    
    const [contacts, setContacts] = useState(
        [] //Empieza vacio
    )
    const [isLoadingContacts, setIsLoadingContacts] = useState(true)

    // Estado em el que se cargar el parametro de busqueda
    const [searchTerm, setSearchTerm] = useState('');
   // Realiza un filtro deauerdo al parametro 
    const filteredChats = contacts.filter(contacts =>
    contacts.name.toLowerCase().includes(searchTerm.toLowerCase()) 
);

 // Función para marcar los mensajes de un contacto específico como leídos
    const markMessagesAsRead = (contactIdToMark) => {
        setContacts(prevContacts => {
            return prevContacts.map(contact => {
                if (contact.id === Number(contactIdToMark)) {
                    return {
                        ...contact,
                        unread_messages: 0, // Establecemos los mensajes no leídos a 0
                        last_message: {
                            ...contact.last_message,
                            status: 'visto'
                        }                  
                    };
                }
                return contact;
            });
        });
    };


    


 // Uso useEffect para cargar los contactos cada vez que haya un cambio
    useEffect(() => {
        setIsLoadingContacts(true); 
        setTimeout(
            () => {
                const contact_list = getContactList(); // Obtengo la lista de contactos
                setContacts(contact_list);
                setIsLoadingContacts(false);
            },
            2000
        );
    }, []);


    return (
        <ContactContext.Provider
            value={
                {
                    contacts: contacts,
                    isLoadingContacts: isLoadingContacts,
                    searchTerm:searchTerm,
                    setSearchTerm:setSearchTerm,
                    filteredChats: filteredChats,
                    markMessagesAsRead: markMessagesAsRead
                }
            }
        >
            {children}
        </ContactContext.Provider>
    )
}

export default ContactContextProvider