import React, { createElement } from "react";

const DataGridTopbar = ({ productDataSource, onAdd, onEdit, onRemove, setPayload, selected }) => {
    const ds = productDataSource;
    const current = productDataSource.offset;

    const edit = () => {
        if (selected) {
            setPayload(selected);
            onEdit();
        }
    };
    const remove = () => {
        if (selected) {
            setPayload(selected);
            onRemove();
        }
    };
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "5px",
                paddingBottom: "20px",
                paddingRight: "15px",
                paddingLeft: "15px",
                backgroundColor: "white"
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
                <button className="btn btn-light btn-sm" onClick={onAdd}>
                    add
                </button>
                <button className="btn btn-light btn-sm" style={{ marginLeft: "5px" }} onClick={edit}>
                    edit
                </button>
                <button className="btn btn-danger btn-sm" style={{ marginLeft: "5px" }} onClick={remove}>
                    remove
                </button>
            </div>
        </div>
    );
};

export default DataGridTopbar;
