import React,{createElement} from "react";

const DataGridWrapper = ({ children }) => {
    return (
        <div
            style={{
                border: "1px solid",
                marginTop: "3%",
                width: "700px",
                height: "700px"
            }}
        >
            {children}
        </div>
    );
};

export default DataGridWrapper;
