# Consumo de API REST con JSONPlaceholder (Recurso /posts)

Aplicación académica desarrollada con **TypeScript** y **HTML5** nativo que interactúa con una API REST simulada para la administración de publicaciones.

## Instrucciones para Ejecutar el Proyecto
1. Descargue o clone los archivos de este repositorio en su ordenador.
2. Si desea compilar el código TypeScript manualmente, ejecute `tsc app.ts`.
3. Abra el archivo `index.html` directamente en su navegador web favorito.
4. Interactúe con las diferentes interfaces correspondientes a cada método REST.

---

## Métodos HTTP Utilizados

### 1. GET (Consultar Recursos)
*   **Descripción:** Recupera datos del servidor sin alterar el estado del sistema. Es una operación idempotente y segura.
*   **Uso:** Empleado para mapear el listado general de publicaciones, buscar un elemento único mediante `/posts/id`, y filtrar colecciones específicas enviando variables de consulta estructuradas como `?userId=id`.

### 2. POST (Crear Recursos)
*   **Descripción:** Transfiere una entidad de datos estructurada hacia el servidor para registrar un elemento completamente nuevo en la colección.
*   **Uso:** Utilizado en el formulario de creación, emitiendo un payload JSON completo al endpoint base `/posts`.

### 3. PATCH (Modificación Parcial)
*   **Descripción:** A diferencia de `PUT` (el cual reemplaza el registro completo), `PATCH` realiza una edición asimétrica modificando únicamente los campos discretos adjuntados en la petición.
*   **Uso:** Empleado específicamente para actualizar de forma aislada la propiedad `title` de una publicación sin alterar su cuerpo (`body`) ni el identificador del autor.

### 4. DELETE (Eliminar Recursos)
*   **Descripción:** Envía una instrucción explícita al servidor para remover la existencia de un recurso determinado por medio de su clave primaria.
*   **Uso:** Ejecuta la destrucción lógica o física sobre el recurso indexado a través de la ruta `/posts/id`.



