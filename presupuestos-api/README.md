# Backend – Sistema de Gestión de Presupuestos

Este es el backend de la prueba técnica para INNOVARYX y permite gestionar presupuestos de proyectos mediante una API REST desarrollada con Spring Boot.

---

## Tecnologías utilizadas

- **Java 17**

- **Spring Boot**

- **Spring Web** (para construir la API REST)

- **Spring Data JPA** (para persistencia en base de datos)

- **PostgreSQL** (como motor de base de datos)

- **Lombok** (para reducir código repetitivo)

- **Maven** (gestión de dependencias)

---

## Arquitectura del Backend

Se utilizó una arquitectura en capas para mantener la separación de responsabilidades:

**1. Modelo (Entidad)**
Define la estructura del objeto Presupuesto, que contiene campos como: ID, nombre, monto total, fecha de creación y estado.

**2. Repositorio**
Interfaz que extiende JpaRepository para obtener automáticamente métodos CRUD sin necesidad de implementarlos manualmente.

**3. Servicio**
Contiene la lógica de negocio: creación, validación, actualización y eliminación de presupuestos. Maneja excepciones y validaciones.

**4. Controlador**
Expone los endpoints HTTP (GET, POST, PUT, DELETE) y se comunica con el servicio para ejecutar las operaciones solicitadas por el frontend.

---

## Funcionalidades implementadas

- Listar todos los presupuestos

- Obtener un presupuesto por ID

- Crear un nuevo presupuesto

- Editar un presupuesto existente

- Eliminar un presupuesto

- Documentación Swagger de todos los endpoints

---

## Configuración de base de datos

La base de datos utilizada es PostgreSQL. La conexión se configuró desde el archivo application.properties, especificando la URL, usuario, contraseña y opciones de Hibernate para autogenerar la tabla.

---

## Pruebas realizadas

- Se probaron todos los endpoints con Postman.

- Se verificó la persistencia correcta en PostgreSQL.

- Se revisó el funcionamiento en conjunto con el frontend desarrollado en ReactJS.