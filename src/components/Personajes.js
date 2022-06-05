import React from "react";
import { Personaje } from "./Personaje";

export const Personajes = ({personajes, texto}) =>{

if(personajes.length === 0) return <p> No existe un personaje llamado "{texto}"</p>

    return(
        <section className="lista-personajes">
            {personajes.map((personaje)=>(
                <Personaje key={personaje.id} personaje = {personaje}/>
            ))}
        </section>
    )
}