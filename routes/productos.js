const express=require('express');
const router=express.Router();
const productocontroller=require('../controllers/productocontroller');

router.get('/productos/:id', productocontroller.obtenerProductoPorId);
module.exports=router;