import React, { useEffect, useState } from "react";
import axios from "axios";


const ListaPresupuestos = () => {
    const [presupuestos, setPresupuestos] = useState([]);
    const [editando, setEditando] = useState(null);
    const [formulario, setFormulario] = useState({
    nombre: "",
    fecha: "",
    montoTotal: "",
    estado: "PENDIENTE"
    });

    const [busquedaId, setBusquedaId] = useState("");
    const [resultadoBusqueda, setResultadoBusqueda] = useState(null);

    const obtenerPresupuestos = () => {
    axios.get("http://localhost:8080/presupuestos")
        .then(response => setPresupuestos(response.data))
        .catch(error => console.error("Error al cargar presupuestos", error));
    };

    useEffect(() => {
        obtenerPresupuestos();
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("¿Estás seguro de eliminar este presupuesto?")) {
            axios.delete(`http://localhost:8080/presupuestos/${id}`)
                .then(() => obtenerPresupuestos())
                .catch(err => console.error("Error al eliminar presupuesto", err));
        }
    };

    const handleEdit = (presupuesto) => {
        setEditando(presupuesto.id);
        setFormulario(presupuesto);
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setFormulario({ ...formulario, [name]: value });
    };

    const handleUpdate = e => {
        e.preventDefault();

        axios.put(`http://localhost:8080/presupuestos/${formulario.id}`, formulario)
        .then(() => {
            setEditando(null);
            setFormulario({
                nombre: "",
                fecha: "",
                montoTotal: "",
                estado: "PENDIENTE"
            });
            obtenerPresupuestos();
        })
        .catch(err => console.error("Error al actualizar presupuesto", err));
    };

    const buscarPorId = () => {
        if(busquedaId.trim() === "") return;

        axios.get(`http://localhost:8080/presupuestos/${busquedaId}`)
            .then(response => setResultadoBusqueda(response.data))
            .catch(error => {
                console.error("Presupuesto no encontrado", error);
                setResultadoBusqueda(null);
            });
    };

    return (
        <div className="container">{
            <div>
            <h2>Listado de Presupuestos</h2>

            <div style={{marginBottom: "20px"}}>
                <input type="number" placeholder="Buscar Por ID " value={busquedaId} onChange={e => setBusquedaId(e.target.value)}/>
                <button onClick={buscarPorId}>Buscar</button>
            </div>

            {resultadoBusqueda && (
                <div style={{marginBottom: "20px"}}>
                    <h3>Resultado de la busqueda:</h3>
                    <p><strong>ID:</strong>{resultadoBusqueda.id}</p>
                    <p><strong>Nombre:</strong> {resultadoBusqueda.nombre}</p>
                    <p><strong>Fecha:</strong> {resultadoBusqueda.fecha}</p>
                    <p><strong>Monto Total:</strong> {resultadoBusqueda.montoTotal}</p>
                    <p><strong>Estado:</strong> {resultadoBusqueda.estado}</p>
                </div>
            )}

            <table border="1" cellPadding="8">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Fecha</th>
                    <th>Monto Total</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {presupuestos.map(p => (
                    editando === p.id ? (
                    <tr key={p.id}>
                        <td>{p.id}</td>
                        <td><input name="nombre" value={formulario.nombre} onChange={handleChange} /></td>
                        <td><input type="date" name="fecha" value={formulario.fecha} onChange={handleChange} /></td>
                        <td><input type="number" name="montoTotal" value={formulario.montoTotal} onChange={handleChange} /></td>
                        <td>
                        <select name="estado" value={formulario.estado} onChange={handleChange}>
                            <option value="PENDIENTE">PENDIENTE</option>
                            <option value="APROBADO">APROBADO</option>
                            <option value="RECHAZADO">RECHAZADO</option>
                        </select>
                        </td>
                        <td>
                        <button onClick={handleUpdate}>Guardar</button>
                        <button onClick={() => setEditando(null)}>Cancelar</button>
                        </td>
                    </tr>
                    ) : (
                    <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{p.nombre}</td>
                        <td>{p.fecha}</td>
                        <td>{p.montoTotal}</td>
                        <td>{p.estado}</td>
                        <td>
                        <button onClick={() => handleEdit(p)}>Editar</button>
                        <button onClick={() => handleDelete(p.id)}>Eliminar</button>
                        </td>
                    </tr>
                    )
                ))}
                </tbody>
            </table>
            </div>
        }</div>
    );
};

export default ListaPresupuestos;
