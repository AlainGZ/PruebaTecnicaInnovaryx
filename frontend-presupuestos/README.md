#  Frontend – Gestión de Presupuestos (React.js)

Este apartado es la parte **frontend** de la Prueba Técnica Full Stack para INNOVARYX.  
Permite gestionar presupuestos conectándose a una API REST creada con Java Spring Boot.

---

##  Funcionalidades

-  Ver listado de presupuestos y/o uno a uno
-  Crear un nuevo presupuesto
-  Editar un presupuesto existente
-  Eliminar un presupuesto

---

##  Tecnologías Usadas

- **React.js** (creado con `create-react-app`)
- **Axios** para peticiones HTTP
- **HTML + CSS**


---

##  Estructura de Carpetas

frontend-presupuestos/
├── public/
├── src/
│ ├── components/
│ │ ├── FormularioPresupuesto.jsx
│ │ └── ListaPresupuestos.jsx
│ ├── App.js
│ └── index.js
├── package.json
└── README.md



##  Comunicación con el Backend

La aplicación se conecta al backend Java Spring Boot disponible en: http://localhost:8080/presupuestos

## Rutas consumidas:
GET /presupuestos

GET /presupuestos/{id}

POST /presupuestos

PUT /presupuestos/{id}

DELETE /presupuestos/{id}

##  Componentes

###FormularioPresupuesto.jsx
Formulario para crear o editar un presupuesto.
Campos:
Id

Nombre

Fecha

Monto total

Estado

Envía los datos al backend usando Axios.

###ListaPresupuestos.jsx
Tabla que muestra todos los presupuestos en un listado o de manera indicidual por el Id.
Incluye botones para editar y eliminar presupuestos.

###  Estilos
El proyecto incluye estilos básicos con CSS