import {Product} from "./Product.js";
import {Category} from "./Category.js";

export const createProduct = async (req, res) => {
  const {name, description, price, imageUrl, categoryId, stock} = req.body;

  if (!name || !description || !price || !imageUrl || !categoryId || !stock) {
    return res.status(400).send('All fields are required');
  }
  try {
    if (categoryId) {
      const category = await Category.findByPk(categoryId);
      if (!category) {
        return res.status(404).json({message: 'Category not found'});
      }
    }
    const product = await Product.create({name, description, price, imageUrl, categoryId, stock});
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Internal server error'});
  }
}

export const createCategory = async (req, res) => {
  const {name} = req.body;
  if (!name) {
    return res.status(400).send('All fields are required');
  }
  try {
    const category = await Category.create({name});
    res.json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Internal server error'});
  }
}

export const getProductsByCategory = async (req, res) => {
  const {categoryId} = req.params;
  try {
    const products = await Product.findAll({
      where: {categoryId},
      attributes: ['name', 'imageUrl', 'price'],
    });
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Internal server error'});
  }
}
export const getProductById = async (req, res) => {
  const {id} = req.params;
  try {

    const product = await Product.findByPk(id)
    if (!product) {
      return res.status(404).json({message: 'Products not found'});
    }
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Internal server error'});
  }
}

export const deleteProduct = async (req, res) => {
  const {id} = req.params;
  try {
    const deletedProduct = await Product.destroy({where: {id}})
    if (deletedProduct === 0) {
      return res.status(404).json({message: 'Product not found'})
    }
    res.json({message: `Product with id ${id} successfully deleted`})
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Internal server error'});
  }
}
export const updateProduct = async (req, res) => {
  const {id} = req.params;
  const {name, description, price, imageUrl, categoryId, stock} = req.body;
  try {
    if (categoryId) {
      const category = await Category.findByPk(categoryId);
      if (!category) {
        return res.status(404).json({message: 'Category not found'});
      }
    }
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({message: 'Product not found'});
    }
    await product.update({name, description, price, imageUrl, categoryId, stock});
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Internal server error'});
  }
}
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      attributes: ['id', 'name'],
    });
    res.json(categories);

  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Internal server error'});
  }
}