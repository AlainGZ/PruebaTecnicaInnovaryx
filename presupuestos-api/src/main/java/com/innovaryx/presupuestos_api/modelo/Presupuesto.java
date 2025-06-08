package com.innovaryx.presupuestos_api.modelo;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name="presupuestos") //Esto es para generar una tabla llamada presupuestos en la base de datos
@Data                       //Esta anotacion genera los getters y setters
@AllArgsConstructor         // Crea un constructor con todos los atributos
@NoArgsConstructor          // Tambien crea un constructor pero este vacio
public class Presupuesto {
	@Id
	private Long id;

	private String nombre;

	private LocalDate fecha;

	private BigDecimal montoTotal;

	private String estado;


}
