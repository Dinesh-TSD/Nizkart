import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  category: String,
  imageUrl: String,
});

const Product = mongoose.model('Product', productSchema);
export default Product;
