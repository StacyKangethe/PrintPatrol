import React from "react";
import { Tab } from "@mui/material";

const NavigateTabs = () => {
    const tabs = [
        "All",
        "420 Collection",
        "Home Accessories",
        "Street Wear"
    ];

    return (
        <div>
            <div className="flex items-center justify-center py-8">
                {tabs.map((tab, index) => {
                    return (
                        <div key={index} className="mr-4"v>
                            <tab color="white" ariant="outlined" ripple={true} className="hover:bg-green duration-300 ease-">{tab}</tab>
                        </div>
                    );
                })}
            </div>
        </div>
    )
};

export default NavigateTabs;