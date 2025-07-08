import mook_data from "../data/contact-mook"


export const getContactList = () => {
    return mook_data.contacts
}

export const getContactById = (contacts, contact_id) => {
    return contacts.find(contact => contact.id === Number(contact_id));
}