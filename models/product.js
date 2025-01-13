const parseProduct = (productData) => {
    return {
        id: productData.id,
        name: productData.name,
        description: productData.description,
        price: productData.price,
        stock: productData. stock
    }
}

module.exports = parseProduct

// import mongoose from 'mongoose';

// const productSchema = new mongoose.Schema({
//   id: { type: String, required: true, unique: true }, // Custom id field
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   stock: { type: Number, required: true },
//   imageUrl: { type: String, required: true },
// });

// const Product = mongoose.model('Product', productSchema);

// export default Product;