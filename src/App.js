import React, { Fragment, useState, useEffect } from 'react'

// Importing my own components
import Formulario from './components/Formulario'
import Cita from './components/Cita'

function App() {

    // Cita en LocalStorage
    let citasIniciales = JSON.parse(localStorage.getItem('citas'))
    if(!citasIniciales) {
        citasIniciales = []
    }

    // Arreglo de Citas
    const [ citas, guardarCitas ] = useState(citasIniciales)

    // usar useEffect para aplicar cambios cuando el state o app cambia
    useEffect( () => {
        let citasIniciales = JSON.parse(localStorage.getItem('citas'))
        if(citasIniciales) {
            localStorage.setItem('citas', JSON.stringify(citas))
        } else {
            localStorage.setItem('citas', JSON.stringify([]))
        }
    }, [citas] )

    // Leer la nueva cita y las que ya existen
    const crearCita = cita => {
        guardarCitas([
            ...citas,
            cita
        ])
    }

    // funcion que elimina una cita por su id
    const eliminarCita = id => {
        const nuevaCitas = citas.filter(cita => cita.id !== id)

        guardarCitas(nuevaCitas)
    }

    // Mensaje condicionals
    const titulo = citas.length === 0 ? 'No hay Citas' : 'Administra tus Citas' 

    return (
        <Fragment>
        <div className="container">
            <h1 className="text-center mb-5">Administrador de Pacientes</h1>
            <div className="row">
            <div className="col-md-6">
                <Formulario 
                    crearCita={crearCita}
                />
            </div>
            <div className="col-md-6">
                <h2 className="text-center">{titulo}</h2>
                {citas.map(cita => (
                    <Cita 
                        key={cita.id}
                        cita={cita}
                        eliminarCita={eliminarCita}
                    />
                ))}
            </div>
            </div>
        </div>
        </Fragment>
    )
}

export default App
