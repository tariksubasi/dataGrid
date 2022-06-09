import React, { createElement } from "react";

const DataGridTopbar = ({ productDataSource }) => {
    const ds = productDataSource;
    const current = productDataSource.offset;
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop : "5px",
                paddingBottom : "5px",
                paddingRight : "15px",
                paddingLeft : "15px",
            }}
        >
            <div>
                <span
                    role="button"
                    style={{
                        marginRight: "10px"
                    }}
                    className="glyphicon glyphicon-chevron-left"
                    onClick={() => current >= 10 && ds.setOffset(current - 10)}
                ></span>
                <span
                    role="button"
                    className="glyphicon glyphicon-chevron-right"
                    onClick={() => ds.setOffset(current + 10)}
                ></span>
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
