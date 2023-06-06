import React, { useEffect } from "react";
import "./Diagnostics.scss";
import Title from "./Title/Title";
import Text from "./Text/Text";
import Item from "./Item/Item";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { dataDiagnosticsSelector } from "../../selectors/selectors";
import { getDiagnostics } from "../../reactRedux/reducerDiagnistics";

const Diagnostics = () => {
    const dataDiagnostics = useSelector(dataDiagnosticsSelector);
    const dispatch = useDispatch();
    const { Page } = useParams();
    useEffect(() => {
        dispatch(getDiagnostics(Page));
    }, [Page]);
    return (
        <div className="container">
            <div className="Diagnostics">
                <Title />
                {dataDiagnostics.texts.map((el) => {
                    return <Text key={el.id} text={el.text} />;
                })}
                <div className="Diagnostics__row">
                    {dataDiagnostics.cards.map((el) => {
                        return (
                            <Item
                                key={el.id}
                                title={el.title}
                                problem={el.problem}
                                text={el.text}
                                link={el.link}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Diagnostics;
