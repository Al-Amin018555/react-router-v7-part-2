import { useState } from "react";

const ProductForm = ({ handleProducts }) => {
    const [error, setError] = useState('');

    const handleProductSubmit = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        if (name.length === 0) {
            setError('Please Provide a product name');
            return;
        }
        else if (price.length === 0) {
            setError("please provide the price of product");
            return;
        }
        else if (price < 0) {
            setError('Price can not be negative');
            return;
        }
        else if (!quantity) {
            setError('Please provide quantity of product');
            return;
        }
        else {
            setError('');
        }
        const newProduct = {
            name,
            price,
            quantity,
        }
        handleProducts(newProduct);
    }
    return (
        <div>
            <h3>Add a Product</h3>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name="name" placeholder="Product Name" />
                <br />
                <input type="text" name="price" placeholder="Product Price" />
                <br />
                <input type="text" name="quantity" placeholder="Product Quantity" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{ color: 'red' }}><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;