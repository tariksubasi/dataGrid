import React, { createElement } from "react";

const DataGridTopbar = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "3px"
            }}
        >
            <div>
                <span
                    role="button"
                    style={{
                        marginRight: "5px"
                    }}
                    className="glyphicon glyphicon-chevron-left"
                ></span>
                <span role="button" className="glyphicon glyphicon-chevron-right"></span>
            </div>
            <div>
                <button className="btn btn-light btn-sm">add</button>
                <button className="btn btn-light btn-sm">edit</button>
                <button className="btn btn-danger btn-sm">remove</button>
            </div>
        </div>
    );
};

export default DataGridTopbar;
