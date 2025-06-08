#  Prueba Técnica – Desarrollador Full Stack

Este proyecto cumple con los requerimientos de la prueba técnica para el rol de Desarrollador Full Stack, usando:

* **Backend:** Java con Spring Boot
* **Frontend:** React.js
* **Base de datos:** PostgreSQL (nombre: `presupuestosdb`)
* **AWS (Paso a paso escrito pues no tengo una cuenta en la platforma):** S3 para frontend, RDS para base de datos
* **Buenas prácticas:** Arquitectura por capas, uso de Git, documentación en README

El sistema permite gestionar presupuestos de proyectos a través de operaciones CRUD completas (crear, consultar, actualizar y eliminar presupuestos).

---

##  Estructura del Repositorio

```
/PruebaTecnica
│
├── frontend-presupuestos  # Proyecto React.js (interfaz)
│   └── README.md           # Documentación del frontend
│
├── presupuestos-api   # Proyecto Spring Boot (API REST)
│   └── README.md           # Documentación del backend
│
└── README.md               # Documentación general (este archivo)
```

Para más detalles de componentes y desarrollo, consulte los `README.md` individuales de cada subproyecto.

---

##  AWS – Pasos para el despliegue

###  Subida del frontend a Amazon S3 (simulación)

1. Ejecutar `npm run build` en la carpeta `frontend-presupuestos`.
2. Ir a la consola de AWS → S3 → Crear bucket.
3. En configuración del bucket:

   * Deshabilitar el bloqueo de acceso público.
   * Activar **"Habilitar alojamiento estático de sitios web"**.
4. Subir la carpeta `build/` al bucket.
5. Establecer el documento de inicio.
6. Obtener la URL pública generada y probar en el navegador.

###  Configuración de RDS con PostgreSQL (simulación)

1. Ir a la consola de AWS → RDS → Crear base de datos.
2. Elegir PostgreSQL y configuración estándar.
3. Establecer el nombre de la base de datos como: `presupuestosdb`.
4. Definir usuario, contraseña y habilitar el acceso.
5. Crear una instancia con VPC y puerto `5432`.
6. En la aplicación Spring Boot, actualizar el `application.properties` con los datos de conexión a RDS.


