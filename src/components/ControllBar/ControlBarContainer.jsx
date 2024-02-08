import React, {useState} from 'react';
import ControllBarPresenter from "./ControlBarPresenter";
import {useNavigate} from "react-router-dom";

const ControlBarContainer = () => {
    const navigate = useNavigate();
    const [q, SetQ] = useState("")
    const [loc1, SetLoc1] = useState("")
    const [loc2, SetLoc2] = useState("")
    const options = [
        {
            value: '부산광역시',
            label: '부산광역시',
            children: [
                {
                    value: '전체',
                    label: '전체',
                },
                {
                    value: '강서구',
                    label: '강서구',
                },
                {
                    value: '금정구',
                    label: '금정구',
                },
                {
                    value: '남구',
                    label: '남구',
                },
                {
                    value: '연제구',
                    label: '연제구',
                },
                {
                    value: '동래구',
                    label: '동래구',
                },
                {
                    value: '수영구',
                    label: '수영구',
                },
                {
                    value: '동구',
                    label: '동구',
                },
                {
                    value: '서구',
                    label: '서구',
                },
                {
                    value: '중구',
                    label: '중구',
                },
                {
                    value: '영도구',
                    label: '영도구',
                },
                {
                    value: '사상구',
                    label: '사상구',
                },
                {
                    value: '사하구',
                    label: '사하구',
                },
                {
                    value: '북구',
                    label: '북구',
                },
                {
                    value: '해운대구',
                    label: '해운대구',
                },
                {
                    value: '기장군',
                    label: '기장군',
                },
            ],
        },
    ];
    const onChangeLocate = (value) => {
        SetLoc1(value[0]);
        SetLoc2(value[1]);
    };
    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    const toHome = () => {
        navigate("/");
    }
    const onSearchHandler = (event) => {
        event.preventDefault();
        const query = {};
        if(q!=="") query.q=q
        if(loc1!=="") query.loc1=loc1
        if(loc2!=="") query.loc2=loc2

        // 여기에서 검색 요청 보내기
        console.log(query)
    }
    const onChangeHandler = (event) => {
        SetQ(event.target.value);
        // 여기에서 검색 요청 보내기
        console.log("제출")
    }

    return (
        <ControllBarPresenter
            onSearchHandler={onSearchHandler}
            onChangeHandler={onChangeHandler}
            toHome={toHome}
            toTop={toTop}
            options={options}
            onChangeLocate={onChangeLocate} />
    );
};

export default ControlBarContainer;