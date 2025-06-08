package com.innovaryx.presupuestos_api;

import com.innovaryx.presupuestos_api.modelo.Presupuesto;
import com.innovaryx.presupuestos_api.service.PresupuestoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController //Define el punto de entrada
@RequestMapping("/presupuestos")  //asigna solicitudes HTTP a los métodos y defina la ruta en este caso a presupuestos
@CrossOrigin(origins = "http://localhost:3000")    //Permite los llamados desde el Front
public class PresupuestoController {
	@Autowired
	private PresupuestoService presupuestoService;

	@PostMapping
	public ResponseEntity<Presupuesto> crear(@RequestBody Presupuesto presupuesto){
		return ResponseEntity.ok(presupuestoService.crearPresupuesto(presupuesto));
	}

	@GetMapping
	public ResponseEntity<List<Presupuesto>> listar(){
		return ResponseEntity.ok(presupuestoService.listarPresupuestos());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Presupuesto> obtener(@PathVariable Long id){
		return presupuestoService.obtenerPorId(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
	}

	@PutMapping("/{id}")
	public ResponseEntity<Presupuesto> actualizar(@PathVariable Long id, @RequestBody Presupuesto presupuesto){
		return ResponseEntity.ok(presupuestoService.editarPresupuesto(id, presupuesto));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> eliminar(@PathVariable Long id){
		presupuestoService.eliminarPresupuesto(id);
		return ResponseEntity.noContent().build();
	}
}
