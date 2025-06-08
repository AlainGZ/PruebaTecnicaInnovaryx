package com.innovaryx.presupuestos_api.service;

import com.innovaryx.presupuestos_api.modelo.Presupuesto;
import com.innovaryx.presupuestos_api.repository.PresupuestoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PresupuestoService {
	@Autowired // Esto hace la inyeccion de dependencias
	private PresupuestoRepository presupuestoRepository;

	public Presupuesto crearPresupuesto(Presupuesto presupuesto){
		if (presupuestoRepository.existsById(presupuesto.getId())) {
			throw new RuntimeException("Ya existe un presupuesto con ese ID");
		}
		return presupuestoRepository.save(presupuesto);
	}

	public List<Presupuesto> listarPresupuestos(){
		return presupuestoRepository.findAll();
	}

	public Optional<Presupuesto> obtenerPorId(Long id) {
		return presupuestoRepository.findById(id);
	}

	//Se busca por id el elemento a editar y si lo encuentra actualiza toda la informacion pero si no entonces envia un mensaje notificando que no encontro el id
	public Presupuesto editarPresupuesto(Long id, Presupuesto presupuestoActualizado){
		return presupuestoRepository.findById(id).map(presupuesto -> {
			presupuesto.setId(presupuestoActualizado.getId());
			presupuesto.setNombre(presupuestoActualizado.getNombre());
			presupuesto.setFecha(presupuestoActualizado.getFecha());
			presupuesto.setMontoTotal(presupuestoActualizado.getMontoTotal());
			presupuesto.setEstado(presupuestoActualizado.getEstado());
			return presupuestoRepository.save(presupuesto);
		}).orElseThrow(() -> new RuntimeException("Presupuesto no encontrado"));
	}

	public void eliminarPresupuesto(Long id){
		presupuestoRepository.deleteById(id);
	}
}
