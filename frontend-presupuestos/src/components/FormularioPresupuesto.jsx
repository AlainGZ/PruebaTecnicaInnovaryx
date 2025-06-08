import React, { useState } from "react";
import axios from "axios";

const FormularioPresupuesto = ({ onPresupuestoCreado }) => {
    const [formulario, setFormulario] = useState({
        id: "",
        nombre: "",
        fecha: "",
        montoTotal:"",
        estado: "PENDIENTE"
    });

    const [error, setError] = useState(null);
    const [exito, setExito] = useState(null);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormulario({...formulario, [name]: value});
    };

    const handleSubmit = e => {
        e.preventDefault();

        if(!formulario.id || !formulario.nombre || !formulario.fecha || !formulario.montoTotal){
            setError("Llene todos los campos");
            return;
        }

        axios.post("http://localhost:8080/presupuestos", formulario)
        .then(response => {
            setExito("Presupuesto creado exitosamente");
            setError(null);
            setFormulario({
                id:"",
                nombre: "" ,
                fecha: "",
                montoTotal:"",
                estado: "PENDIENTE"
            });

            if(onPresupuestoCreado){
                onPresupuestoCreado();
            }
        })
        .catch(error => {
            console.error(error);
            setError("Error al crear presupuesto");
            setExito(null);
        });

        
    };

    return(
        <div>
            <h2>Crear Presupuesto</h2>
            {error && <p style={{color: "red"}}>{error}</p>}
            {error && <p style={{color: "green"}}>{exito}</p>}
            <form onSubmit={handleSubmit}>
                <label>Id: <br/>
                    <input type="number" name="id" value={formulario.id} onChange={handleChange}/>
                </label><br/>

                <label>Nombre: <br/>
                    <input type="text" name="nombre" value={formulario.nombre} onChange={handleChange}/>
                </label><br/>

                <label>Fecha: <br/>
                    <input type="date" name="fecha" value={formulario.fecha} onChange={handleChange}/>
                </label><br/>

                <label>Monto Total: <br/>
                    <input type="number" name="montoTotal" value={formulario.montoTotal} onChange={handleChange}/>
                </label><br/>

                <label>Estado: <br/>
                    <select name="estado" value={formulario.estado} onChange={handleChange}>
                        <option value="PENDIENTE">PENDIENTE</option>
                        <option value="APROVADO">APROVADO</option>
                        <option value="RECHAZADO">RECHAZADO</option>
                    </select>
                </label><br/> <br/>

                <button type="submit">Guardar</button>
            </form>
        </div>
    );
};

export default FormularioPresupuesto;