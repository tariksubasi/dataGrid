import { createElement, useState } from "react";
import DataGridWidgetWrapper from "./components/DataGridWidgetWrapper";
import DataGridWrapper from "./components/DataGridWrapper";
import useGetProductData from "./hooks/useGetProductData";
import DataGridRow from "./components/DataGridRow";
import "./ui/DataGrid.css";
import DataGridHeader from "./components/DataGridHeader";
import DataGridTopbar from "./components/DataGridTopbar";

const ValueStatus = {
    available: "available",
    unavailable: "unavailable"
};

export function DataGrid(props) {
    console.log("props", props);

    const {
        productData: { status: productDataStatus }
    } = props;

    if (productDataStatus === ValueStatus.available) {
        const { myProductData, productDataSource } = useGetProductData(props);

        const [selected, setSelected] = useState(null);
        console.warn("selected", selected);
        return (
            <DataGridWidgetWrapper>
                <DataGridWrapper>
                    <DataGridTopbar productDataSource={productDataSource} />
                    <DataGridHeader product={myProductData[0]} />
                    {myProductData.map(product => {
                        return <DataGridRow product={product} selected={selected} setSelected={setSelected} />;
                    })}
                </DataGridWrapper>
            </DataGridWidgetWrapper>
        );
    } else {
        return <div>loading...</div>;
    }
}
