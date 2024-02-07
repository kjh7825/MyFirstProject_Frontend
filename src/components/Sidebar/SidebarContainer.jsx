import React from "react";
import SidebarPresenter from "./SidebarPresenter";

const SidebarContainer = (props) => {
    const controlPage = (page) => {
        if(page === "DailyLog") props.setPage("DailyLog")
        if(page === "SecondhendMarket") props.setPage("SecondhendMarket")
    }

    return <SidebarPresenter controlPage={controlPage} setPage={props.setPage}/>;
};

export default SidebarContainer;
