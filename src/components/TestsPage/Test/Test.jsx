import React from "react";
import "./Test.scss";
import { useDispatch, useSelector } from "react-redux";
import { putSolutionTestTrue, putSolutionTestFalse } from "./testReducer";
import { testDataSelector } from "../../../selectors/selectors";
import Instruction from "./Instruction/Instruction";
import NavToHome from "./Buttons/NavToHome";
import Ok from "./Buttons/Ok";
import YesOrNo from "./Buttons/YesOrNo";

const Test = () => {
    const testData = useSelector(testDataSelector);
    const dispatch = useDispatch();

    const onClickYes = () => {
        dispatch(putSolutionTestTrue(testData.solutionYes));
        dispatch(putSolutionTestFalse(testData.solutionNo));
    };
    const onClickNo = () => {
        dispatch(putSolutionTestTrue(testData.solutionNo));
        dispatch(putSolutionTestFalse(testData.solutionYes));
    };
    return (
        <div className="container">
            <div className="test">
                <h3>{testData.linkNumber}</h3>
                <h4>{testData.problem}</h4>
                <p>{testData.testText}</p>
                <Instruction
                    img={testData.img}
                    video={testData.video}
                    instruction={testData.instruction}
                />
                {testData.linkNumberYes === testData.linkNumberNo &&
                testData.solutionYes === testData.solutionNo ? (
                    testData.linkNumberYes === testData.solutionYes ? (
                        <NavToHome />
                    ) : (
                        <Ok linkNumberYes={testData.linkNumberYes} />
                    )
                ) : (
                    <YesOrNo
                        linkNumberYes={testData.linkNumberYes}
                        linkNumberNo={testData.linkNumberNo}
                        onClickYes={onClickYes}
                        onClickNo={onClickNo}
                    />
                )}
            </div>
        </div>
    );
};

export default Test;
