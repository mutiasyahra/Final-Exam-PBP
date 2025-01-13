const products = []; // Simulasi database

const createProduct = async (req,res) => {
    const { name, description, price, stock } = req.body;
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock,
    }
    products.push(newProduct)
    res.status(201).json(newProduct)
}

const getProducts = (req, res) => {
    res.status(200).json(products)
}

module.exports = {createProduct,getProducts}