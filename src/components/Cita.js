import React from 'react'

const Cita = ({cita, eliminarCita}) => { 

    return (
        <React.Fragment>
            <div className="card text-white bg-primary mb-3">
                <div className="card-header">Fecha: {cita.fecha} - Hora: {cita.hora} </div>
                <div className="card-body">
                    <h4 className="card-title">Paciente: {cita.mascotas}</h4>
                    <p className="card-text">{cita.sintomas}</p>
                    <h6 className="card-title m-0">Dueño de la Mascota: {cita.propetario}</h6>
                </div>
                <div className="card-footer">
                    <button 
                        className="btn btn-secondary"
                        onClick={() => eliminarCita(cita.id) }
                    >Eliminar Cita</button>
                </div>
            </div>
        </React.Fragment>
    )
}
 
export default Cita