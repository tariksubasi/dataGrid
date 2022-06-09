import { createElement } from "react";
import DataGridWidgetWrapper from "./components/DataGridWidgetWrapper";
import DataGridWrapper from "./components/DataGridWrapper";
import useGetProductData from "./hooks/useGetProductData";
import DataGridRow from "./components/DataGridRow";
import "./ui/DataGrid.css";
import DataGridHeader from "./components/DataGridHeader";

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
        const { myProductData } = useGetProductData(props);
        console.warn("myProductData", myProductData);
        return (
            <DataGridWidgetWrapper>
                <DataGridWrapper>
                    <DataGridHeader product={myProductData[0]} />
                    {myProductData.map(product => {
                        return <DataGridRow product={product} />;
                    })}
                </DataGridWrapper>
            </DataGridWidgetWrapper>
        );
    } else {
        return <div>loading...</div>;
    }
}
