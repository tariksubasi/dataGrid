import React, { createElement } from "react";

const DataGridRow = ({ product }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-around",
                padding: "3px"
            }}
        >
            {Object.keys(product).map(key => {
                return <div style={{ flex: "1 1 0px", textAlign: "center" }}>{product[key].toString()}</div>;
            })}
        </div>
    );
};

export default DataGridRow;
