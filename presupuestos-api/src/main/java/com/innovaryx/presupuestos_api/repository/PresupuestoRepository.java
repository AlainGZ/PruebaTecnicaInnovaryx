package com.innovaryx.presupuestos_api.repository;

import com.innovaryx.presupuestos_api.modelo.Presupuesto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository //Se indica que esta interfaz proporciona los operadores CRUD extendiendo de JpaRepository
public interface PresupuestoRepository extends JpaRepository<Presupuesto, Long> {

}
