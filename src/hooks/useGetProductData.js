import React from "react";

const useGetProductData = props => {
    let myProductData = [];

    // linked attribute to get name attribute of product object inside List<Product>
    const {
        productName: prodName,
        productActive: prodActive,
        productPrice: prodPrice,
        productCategory: prodCategory,
        productQuantity: prodQuantity
    } = props;

    const productItems = props.productData.items;

    productItems.forEach(product => {
        const name = prodName.get(product).value;
        const active = prodActive.get(product).value;
        const price = parseFloat(prodPrice.get(product).value).toFixed(2);
        const category = prodCategory.get(product).value;
        const quantity = parseInt(prodQuantity.get(product).value);

        myProductData.push({ name, active, price, category, quantity });
    });

    return { myProductData };
};

export default useGetProductData;
