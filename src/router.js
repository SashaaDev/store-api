import express from "express";
import {validateApiKey} from "./middleware.js";
import * as controller from './controller.js';

const router = express.Router();

router.post('/product', validateApiKey, controller.createProduct);
router.post('/category', validateApiKey, controller.createCategory);
router.get('/products/:categoryId', controller.getProductsByCategory);
router.get('/product/:id', controller.getProductById);
router.delete('/product/:id', validateApiKey, controller.deleteProduct);
router.put('/product/:id', validateApiKey, controller.updateProduct);
router.get('/categories', controller.getCategories);

export default router