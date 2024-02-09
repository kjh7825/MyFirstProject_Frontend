import React, {useState} from 'react';
import HeaderPresenter from "./HeaderPresenter";
import {useLocation} from "react-router-dom";

const HeaderContainer = () => {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(location.pathname);
    return (
        <HeaderPresenter currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    );
};

export default HeaderContainer;