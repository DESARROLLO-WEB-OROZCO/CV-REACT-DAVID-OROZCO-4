📄 CV React Interactivo – Eventos y Estado (EV08)

Este proyecto corresponde a la actividad GA1-220501096-03-AA1-EV08, donde se integran eventos, estado local y componentes interactivos dentro de un CV creado con React y Vite.

El objetivo es agregar interactividad real usando useState, eventos como onClick, onChange, onSubmit, y comunicación entre componentes padre e hijo mediante props.

🚀 Funcionalidades añadidas
1. ToggleHabilidades

Botón para mostrar u ocultar las habilidades.

Uso de useState.

Renderizado condicional.

2. FormularioTecnologia

Formulario controlado para agregar nuevas tecnologías al stack.

Uso de useState en cada input.

Manejo de eventos: onChange y onSubmit.

3. Manejo de Estado Global en App.jsx

Lista de tecnologías almacenada en el estado de App.

Función agregarTecnologia enviada como prop al formulario.

Control de visibilidad del componente Habilidades.

4. Separación de Datos

Archivo cvData.js con información base del CV.

App.jsx usa estos datos y los convierte en estado dinámico.

🧩 Componentes principales

CabeceraCV.jsx

Perfil.jsx

Educacion.jsx

Experiencia.jsx

StackTecnologias.jsx

Habilidades.jsx

ToggleHabilidades.jsx

FormularioTecnologia.jsx

📦 Cómo ejecutar el proyecto
npm install
npm run dev


Abrir el navegador en la URL que indique Vite.

📁 Estructura del proyecto
src/
 ├─ components/
 │   ├─ CabeceraCV.jsx
 │   ├─ Perfil.jsx
 │   ├─ Experiencia.jsx
 │   ├─ Educacion.jsx
 │   ├─ StackTecnologias.jsx
 │   ├─ Habilidades.jsx
 │   ├─ ToggleHabilidades.jsx
 │   └─ FormularioTecnologia.jsx
 ├─ cvData.js
 ├─ App.jsx
 └─ main.jsx

🖼 Capturas (ejemplo sugerido)

Guarda tus imágenes dentro de:

/EVIDENCIAS
![alt text](../CAPTURAS/HABILIDADES.png)

![alt text](<../CAPTURAS/HABILIDADES OCULTAS.png>)

Y colócalas así:

📝 Autoevaluación
1. ¿Qué ventaja ofrece mantener el estado en App.jsx para manejar datos globales?

Mantener el estado en App.jsx permite que toda la información pueda compartirse entre varios componentes.
Esto evita duplicar datos y mantiene el proyecto organizado, permitiendo que los cambios se vean en toda la aplicación.

2. ¿Cómo evitaste que el formulario recargara la página?

Usando:

event.preventDefault();


Esto se coloca dentro del onSubmit para evitar el comportamiento por defecto del navegador.

3. ¿Qué función cumple setTecnologias([...prev, nueva]) frente a push()?

setTecnologias([...prev, nueva]) crea una nueva copia del array, respetando la inmutabilidad de React.
Esto permite que el estado se actualice correctamente y React renderice de nuevo.
push() no sirve porque modifica el array original y React no actualiza la vista.

4. ¿Cómo adaptarías FormularioTecnologia para otros datos como idiomas o proyectos?

Solo debes cambiar:

El nombre del estado local.

El texto del input.

La función que agrega el dato al array correspondiente (idiomas, proyectos, etc.).

La estructura de:
useState → onChange → onSubmit → callback sigue siendo la misma.

5. ¿Qué pasaría si manejaras el estado directamente en un componente hijo?

Los datos quedarían aislados y otros componentes no podrían usarlos.
App.jsx perdería control del CV y sería más difícil mantener o ampliar el proyecto.
Por eso es mejor mantener el estado en el componente padre.