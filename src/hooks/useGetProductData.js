import React from "react";

const useGetProductData = props => {
    let myProductData = [];

    // linked attribute to get name attribute of product object inside List<Product>
    const { productName: prodName } = props;

    const productItems = props.productData.items;

    productItems.forEach(product => {
        const productName = prodName.get(product).value;

        myProductData.push({ productName });
    });

    return { myProductData };
};

export default useGetProductData;
