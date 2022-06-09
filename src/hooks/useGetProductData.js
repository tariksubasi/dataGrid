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
    const productDataSource = props.productData;
    //productDataSource.setOffset(10);
    productDataSource.setLimit(10);

    productItems.forEach(product => {
        const name = prodName.get(product).value;
        const active = prodActive.get(product).value;
        const price = parseFloat(prodPrice.get(product).value).toFixed(2);
        const category = prodCategory.get(product).value;
        const quantity = parseInt(prodQuantity.get(product).value);

        myProductData.push({ name, active, price, category, quantity });
    });

    return { myProductData, productDataSource };
};

export default useGetProductData;
