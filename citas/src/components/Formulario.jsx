import React, { Fragment, useState } from 'react';

const Formulario = () => {

    //Crear State de citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    //Funcion que se ejecuta cada que el usuario escribe en un input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //Extraer los valores 
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    return ( 
        <Fragment>
            <h2>Crear cita</h2>

            <form>
                <label>Nombre mascota</label>
                <input type="text" name="mascota" className="u-full-width" placeholder="Nombre mascota"
                        onChange={actualizarState} value={mascota} />

                <label>Nombre del dueño</label>
                <input type="text" name="propietario" className="u-full-width" placeholder="Nombre del dueño de la mascota"
                        onChange={actualizarState} value={propietario} />

                <label>Fecha</label>
                <input type="date" name="fecha" className="u-full-width"
                        onChange={actualizarState} value={fecha}/>

                <label>Hora</label>
                <input type="time" name="hora" className="u-full-width"
                        onChange={actualizarState} value={hora} />

                <label>Sintomas</label>
                <textarea className="u-full-width" name="sintomas"
                            onChange={actualizarState} value={sintomas} ></textarea>

                <button className="u-full-width button-primary">Agregar cita</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;