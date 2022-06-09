import React, { createElement } from "react";

const DataGridRow = ({ product }) => {
    const { name, active, price, category, quantity } = product;
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-around"
            }}
        >
            <div style={{ flex: "1 1 0px", textAlign: "center" }}>{name}</div>
            <div style={{ flex: "1 1 0px", textAlign: "center" }}>{active}</div>
            <div style={{ flex: "1 1 0px", textAlign: "center" }}>{price}</div>
            <div style={{ flex: "1 1 0px", textAlign: "center" }}>{category}</div>
            <div style={{ flex: "1 1 0px", textAlign: "center" }}>{quantity}</div>
        </div>
    );
};

export default DataGridRow;
