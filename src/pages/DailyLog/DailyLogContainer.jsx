import DailyLogPresenter from "./DailyLogPresenter";
import {useState} from "react";

const DailyLogContainer = () => {
    const [category, setCategory] = useState("최신")

    return (
        <DailyLogPresenter setCategory={setCategory} category={category}/>
    );
};

export default DailyLogContainer;