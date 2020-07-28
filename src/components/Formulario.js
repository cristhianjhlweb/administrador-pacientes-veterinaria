import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Formulario = ({crearCita}) => {

    // Crear State Para Inputs de formularios
    const [ cita, actualizarCita ] = useState({
        mascotas: "",
        propetario: "",
        fecha: "",
        hora: "",
        sintomas: ""
    })

    // state para error
    const [ error, actualizarError ] = useState(false)

    // funcion que se ejecuta cuando se escribe en el input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // extraer los valores
    const { mascotas, propetario, fecha, hora, sintomas } = cita;

    // cuando el usuario hace submit al form
    const submitCita = e => {
        e.preventDefault()

        // Validar
        if(mascotas.trim() === '' || propetario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            actualizarError(true)
            return;
        }

        // elminar mensaje de error
        actualizarError(false)

        // Asignar ID
        cita.id = uuidv4()

        // crear la cita, ccolocar en el state principal
        crearCita(cita)

        // reiniciar el form
        actualizarCita({
            mascotas: "",
            propetario: "",
            fecha: "",
            hora: "",
            sintomas: ""
        })
    }

    return ( 
        <React.Fragment>
            <h2 className="text-center">Crear Cita</h2>

            {error ? <div className="alert alert-danger">Llene todos los campos del formulario</div> : null}
            <form
                onSubmit={submitCita}
            >
                <div className="form-group">
                    <label>Nombre de Mascota</label>
                    <input 
                        type="text"
                        name="mascotas"
                        className="form-control"
                        placeholder="Nombre de su Mascota"
                        onChange={actualizarState}
                        value={mascotas}
                    />
                </div>
                <div className="form-group">
                    <label>Nombre del Dueño</label>
                    <input 
                        type="text"
                        name="propetario"
                        className="form-control"
                        placeholder="Su Nombre Completo"
                        onChange={actualizarState}
                        value={propetario}
                    />
                </div>
                <div className="form-group">
                    <label>Fecha de Registro</label>
                    <input 
                        type="date"
                        name="fecha"
                        className="form-control"
                        onChange={actualizarState}
                        value={fecha}
                    />
                </div>
                <div className="form-group">
                    <label>Hora de Alta</label>
                    <input 
                        type="time"
                        name="hora"
                        className="form-control"
                        onChange={actualizarState}
                        value={hora}
                    />
                </div>
                <div className="form-group">
                    <label>Sintomas</label>
                    <textarea 
                        className="form-control" 
                        name="sintomas"
                        placeholder="Cuales son los sintomas del paciente?"
                        onChange={actualizarState}
                        value={sintomas}
                    ></textarea>
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary d-block w-100"
                >Registrar Paciente</button>
            </form>
        </React.Fragment>
    )
}
 
export default Formulario