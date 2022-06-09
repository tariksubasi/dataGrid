import React, { createElement } from "react";
import "./DataGridRow.css";

const DataGridRow = ({ product }) => {
    return (
        <div
            role="button"
            className="data-grid-row"
            style={{
                display: "flex",
                justifyContent: "space-around",
                padding: "3px",
                paddingTop: "12px",
                paddingBottom: "12px"
            }}
        >
            {Object.keys(product).map(key => {
                return <div style={{ flex: "1 1 0px", textAlign: "center" }}>{product[key].toString()}</div>;
            })}
        </div>
    );
};

export default DataGridRow;
