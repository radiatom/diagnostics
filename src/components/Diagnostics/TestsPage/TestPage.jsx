import React, { useEffect, useState } from "react";
import FinishTests from "./FinishTests/FinishTests";
import Test from "./Test/Test";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTestData, setSaveResault } from "./testReducer";

const TestPage = () => {
    const dispatch = useDispatch();
    const { linkNumber } = useParams();
    const [active, setActive] = useState(false); //анімація opticaly:0-false, optacaly:1-true
    const num = Number(linkNumber);
    useEffect(() => {
        setTimeout(() => {
            dispatch(getTestData(num));
            dispatch(setSaveResault());
            window.scrollTo(0, 0);
            setActive(true);
        }, 300); //таймаут для анімації щоб не появлявся новий тест до того як пройде анімація
    }, [num]);
    return (
        <div className="testPage">
            {num === 7 ? (
                <FinishTests />
            ) : (
                <Test active={active} setActive={setActive} />
            )}
        </div>
    );
};

export default TestPage;
