import React from "react";

export const Filtro = ({texto,setTexto}) => {
    const handleInputChange = ({target}) => {
        setTexto(target.value)
    }

    const handleSubmit= (e) => {
        e.preventDefault()

        console.log(texto)
    }

    return(
        <section className="filtrar">
            <form onSubmit={handleSubmit}>
                <input type="text" name="buscar" placeholder="nombre del personaje" value={texto} onChange={handleInputChange}
                />
                <button className="btn btn-primary" type="submit">Buscar</button>
            </form>
        </section>
    )
}