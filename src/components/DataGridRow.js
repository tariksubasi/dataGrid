import React, { createElement } from "react";
import "./DataGridRow.css";

const DataGridRow = ({ product, selected, setSelected }) => {
    const onClick = () => {
        setSelected(product.name);
    };
    return (
        <div
            role="button"
            className="data-grid-row"
            style={{
                display: "flex",
                justifyContent: "space-around",
                padding: "3px",
                paddingTop: "12px",
                paddingBottom: "12px",
                backgroundColor: selected === product.name ? "#C5C4C3" : undefined
            }}
            onClick={onClick}
        >
            {Object.keys(product).map(key => {
                return <div style={{ flex: "1 1 0px", textAlign: "center" }}>{product[key].toString()}</div>;
            })}
        </div>
    );
};

export default DataGridRow;
