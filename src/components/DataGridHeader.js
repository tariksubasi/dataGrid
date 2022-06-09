import React, { createElement } from "react";

const DataGridHeader = ({ product }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-around",
                padding: "3px",
                fontWeight: "bold",
                border: "1px solid"
            }}
        >
            {Object.keys(product).map(key => {
                return <div style={{ flex: "1 1 0px", textAlign: "center" }}>{key}</div>;
            })}
        </div>
    );
};

export default DataGridHeader;
