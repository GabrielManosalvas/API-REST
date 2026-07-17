"use strict";
const API_URL = "https://jsonplaceholder.typicode.com/posts";
// =======================================
// GET: Obtener todas las publicaciones
// =======================================
async function obtenerPosts() {
    const respuesta = await fetch(API_URL);
    if (!respuesta.ok) {
        throw new Error("Error al obtener las publicaciones.");
    }
    return await respuesta.json();
}
// =======================================
// GET: Buscar publicación por ID
// =======================================
async function obtenerPostPorId(id) {
    const respuesta = await fetch(`${API_URL}/${id}`);
    if (!respuesta.ok) {
        throw new Error(`No se encontró la publicación con ID ${id}.`);
    }
    return await respuesta.json();
}
// =======================================
// GET: Filtrar publicaciones por usuario
// =======================================
async function obtenerPostsPorUsuario(userId) {
    const respuesta = await fetch(`${API_URL}?userId=${userId}`);
    if (!respuesta.ok) {
        throw new Error("Error al consultar las publicaciones del usuario.");
    }
    return await respuesta.json();
}
// =======================================
// POST: Crear publicación
// =======================================
async function crearPost(post) {
    const respuesta = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    });
    if (!respuesta.ok) {
        throw new Error("Error al crear la publicación.");
    }
    return await respuesta.json();
}
// =======================================
// PATCH: Actualizar únicamente el título
// =======================================
async function actualizarTitulo(id, titulo) {
    const respuesta = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: titulo
        })
    });
    if (!respuesta.ok) {
        throw new Error(`Error al actualizar la publicación ${id}.`);
    }
    return await respuesta.json();
}
// =======================================
// DELETE: Eliminar publicación
// =======================================
async function eliminarPost(id) {
    const respuesta = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });
    if (!respuesta.ok) {
        throw new Error(`Error al eliminar la publicación ${id}.`);
    }
    console.log(`Publicación ${id} eliminada correctamente.`);
}
// =======================================
// Función principal
// =======================================
async function ejecutarDemo() {
    try {
        console.log("========== 1. LISTAR PUBLICACIONES ==========");
        const publicaciones = await obtenerPosts();
        console.log(publicaciones);
        console.log("\n========== 2. BUSCAR PUBLICACIÓN POR ID ==========");
        const post = await obtenerPostPorId(1);
        console.log(post);
        console.log("\n========== 3. FILTRAR POR USUARIO ==========");
        const publicacionesUsuario = await obtenerPostsPorUsuario(1);
        console.log(publicacionesUsuario);
        console.log("\n========== 4. CREAR PUBLICACIÓN ==========");
        const nuevoPost = {
            userId: 1,
            title: "Mi primera publicación",
            body: "Esta publicación fue creada desde TypeScript."
        };
        const postCreado = await crearPost(nuevoPost);
        console.log(postCreado);
        console.log("\n========== 5. ACTUALIZAR TÍTULO ==========");
        const postActualizado = await actualizarTitulo(postCreado.id ?? 1, "Título actualizado");
        console.log(postActualizado);
        console.log("\n========== 6. ELIMINAR PUBLICACIÓN ==========");
        await eliminarPost(postCreado.id ?? 1);
        console.log("\nCRUD ejecutado correctamente.");
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error:", error.message);
        }
    }
}
ejecutarDemo();
