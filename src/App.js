import './App.css';
import React, { useEffect, useState} from 'react'
import { Filtro } from './components/Filtro';
import { Personajes } from './components/Personajes';

function App() {
  
  const [loading, setLoading] = useState(true)
  const [personajes, setPersonajes] = useState ([])
  const [texto, setTexto] =useState('')

  useEffect (()=>{
      const fetchpersonajes = async () =>{
      const res = await fetch ('https://rickandmortyapi.com/api/character')
      const data = await res.json()
      setPersonajes(data.results)
      setLoading(false)
  }
      fetchpersonajes()
    }, [])

    
    const personajesFiltrados = personajes.filter(personaje => personaje.name.toLowerCase().includes(texto.toLocaleLowerCase()))

  return (
    <div className='container'>
      <figure className='logo'> <img src='https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png' alt='loguito'></img></figure>

      <Filtro texto={texto} setTexto={setTexto}/>
      {loading ? <div>Cargando...</div> : <Personajes texto={texto} personajes={personajesFiltrados}/>}
    
      
    </div>
  );
}

export default App
