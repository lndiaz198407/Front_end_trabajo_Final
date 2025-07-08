import { Search } from 'lucide-react'
import React, { useContext } from 'react'
import { ContactContext } from '../../Context/ContactContext'
import "../../styles/styles.css";

/* Componente que realiza la busqueda de contactos */
export default function SearchName() {

  const {searchTerm, setSearchTerm } = useContext(ContactContext)
  
  return (
    <div className="search-bar-container">
        <div className="search-input-wrapper">
            <Search  className="search-icon" />
            <input
            type="text"
            placeholder="Buscar un chat "
            className="search-input"
            value={searchTerm}  
            onChange={(e) => setSearchTerm(e.target.value)}  
            />
        </div>
    </div>
  )
}
