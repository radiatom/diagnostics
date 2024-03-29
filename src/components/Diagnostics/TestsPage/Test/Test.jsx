import "./Test.scss";
import { useSelector } from "react-redux";
import { testDataSelector } from "../../../../selectors/selectors";
import Instruction from "./Instruction/Instruction";
import NavToHome from "./Buttons/NavToHome";
import Ok from "./Buttons/Ok";
import YesOrNo from "./Buttons/YesOrNo";
import { useEffect } from "react";
import Progress from "./Progress/Progress";

const Test = ({ active, setActive }) => {
    const testData = useSelector(testDataSelector);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container">
            <div className={active ? "test active" : "test"}>
                <h3>{testData.linkNumber}</h3>
                {testData.progress ? (
                    <div className="test__progress">
                        <Progress position={testData.progress.position} length={testData.progress.length} />
                    </div>
                ) : (
                    <div className="test__progress">
                        <Progress position={0} length={1} />
                    </div>
                )}
                <h4>{testData.problem}</h4>
                <p>{testData.testText}</p>
                <Instruction img={testData.img} video={testData.video} instruction={testData.instruction} />
                {testData.linkNumberYes === testData.linkNumberNo && testData.solutionYes === testData.solutionNo ? (
                    testData.linkNumberYes === testData.solutionYes ? (
                        <NavToHome />
                    ) : (
                        <Ok linkNumberYes={testData.linkNumberYes} setActive={setActive} />
                    )
                ) : (
                    <YesOrNo setActive={setActive} />
                )}
            </div>
        </div>
    );
};

export default Test;
