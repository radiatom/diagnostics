import React, { useEffect } from "react";
import FinishTests from "./FinishTests/FinishTests";
import Test from "./Test/Test";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTestData, setSaveResault } from "../../reactRedux/testReducer";

const TestPage = () => {
    const dispatch = useDispatch();
    const { linkNumber } = useParams();
    const num = Number(linkNumber);
    useEffect(() => {
        dispatch(getTestData(num));
        dispatch(setSaveResault());
        window.scrollTo(0, 0)
    }, [num]);
    return <div>{num === 7 ? <FinishTests /> : <Test />}</div>;
};

export default TestPage;
