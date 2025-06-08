import React, {useState} from 'react';
import ListaPresupuestos from './components/ListaPresupuestos';
import FormularioPresupuesto from './components/FormularioPresupuesto';
import './App.css';

function App() {
  const [actualizarLista, setActualizarLista] = useState(false);

  const handlePresupuestoCreado = () => {
    setActualizarLista(!actualizarLista);
  };

  return (
    <div style={{padding: "20px"}}>
      <FormularioPresupuesto onPresupuestoCreado={handlePresupuestoCreado} />
      <hr/>
      <ListaPresupuestos key={actualizarLista} />
    </div>
  );
}

export default App;

