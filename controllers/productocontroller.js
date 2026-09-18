const productoModel = require("../models/productomodel");

exports.obtenerProductoPorId = (req, res) => {
    const producto = productoModel.findById(req.params.id);

    if (!producto) {
        return res.status(404).json({
            error: "Producto no encontrado"
        });
    }

    res.send(`
        <h1>${producto.nombre}</h1>
        <p>Precio: $${producto.precio}</p>
    `);
};