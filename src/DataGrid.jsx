import { createElement } from "react";
import DataGridWidgetWrapper from "./components/DataGridWidgetWrapper";
import DataGridWrapper from "./components/DataGridWrapper";

import "./ui/DataGrid.css";

export function DataGrid(props) {
    console.log("props", props);
    return (
        <DataGridWidgetWrapper>
            <DataGridWrapper></DataGridWrapper>
        </DataGridWidgetWrapper>
    );
}
