const Product = require('../models/products.model.js')

const addProduct = async (req, res) => {
    //Add check if the product already exists
    try{
        const product = await Product.create(req.body);
        res.status(200).json({messgae: `Product: ${product.name} added successfully`});
    }
    catch(err){
        res.status(500).json({message: `Failed to add product with ${err.name}: ${err.message}`});
        console.error(err);
    }
}

const getProducts = async (req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products)
    }
    catch(err){
        res.status(500).json({message: err.message});
        console.error(err);
    }
}

const getProduct = async (req, res) => {
    try{
        const { id } = req.params
        const product = await Product.findById(id);
        res.status(200).json(product);
    }
    catch(err){
        res.status(500).json({message: `${err.name}: ${err.message} occured`});
        console.error(err);
    }
}

const updateProduct = async (req, res) => {
    try{
        const product = await findElementByIdAndUpdate(id);
        const { id } = req.params;
        
        if(!product){
            return res.status(404).json({message: 'Product Not Found'})
        }

        res.status(500).json({message: `Product ${product.name} succefully Updated`});
    }
    catch(err){
        res.status(500).json({message: `${err.name} ${err.message} occured`});
        console.error(err);
    }
}

const deleteProduct = async (req, res) => {
    try{
        const { id } = req.params
        const product = Product.findElementById(id)
        if(!product){
            return res.status(404).json({message: 'Product Not Found'})
        }
        const deletedProduct = await Product.findElementByIdAndDelete(id);
        res.status(500).json({message: `Product ${deletedProduct.name} has been deleted successfully`})
    }
    catch(err){
        res.status(500).json({message: `Failed to delete product. Error: ${err.name} ${err.message} occured`});
        console.error(err); 
    }
}

module.exports = { addProduct, getProducts, getProduct, updateProduct, deleteProduct };