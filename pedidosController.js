// pedidosController.js
export function crearPedido(usuario, productos) {
    return {
        id: Date.now(),
        usuario,
        productos,
        estado: "pendiente",
        fecha: new Date().toISOString()
    };
}
