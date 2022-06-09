import React, { createElement } from "react";
import "./DataGridWrapper.css";

const DataGridWrapper = ({ children }) => {
    return (
        <div
            className="data-grid-wrapper"
            style={{
                marginTop: "3%",
                width: "700px",
                height: "65%",
                overflowY: "scroll"
            }}
        >
            {children}
        </div>
    );
};

export default DataGridWrapper;
