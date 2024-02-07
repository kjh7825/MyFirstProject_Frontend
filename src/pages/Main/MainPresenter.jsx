import React, {useState} from "react";
import BaseLayout from "../../components/Layout/BaseLayout";
import MainLayout from "./MainLayout";
import DailyLog from "../../components/DailyLog/DailyLog";
import SecondhendMarket from "../../components/SecondhandMarket/SecondhendMarket";

const MainPresenter = () => {
    const [page, setPage] = useState("DailyLog");
    return (
        <BaseLayout setPage={setPage}>
            <MainLayout>
                {page==="DailyLog" && <DailyLog />}
                {page==="SecondhendMarket" && <SecondhendMarket />}
            </MainLayout>
        </BaseLayout>
    );
};

export default MainPresenter;
