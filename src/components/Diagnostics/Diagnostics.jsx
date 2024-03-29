import React, { useEffect } from "react";
import "./Diagnostics.scss";
import Description from "./Description/Description";
import Text from "./Text/Text";
import Item from "./Item/Item";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { dataDiagnosticsSelector } from "../../selectors/selectors";
import { getDiagnostics } from "./reducerDiagnistics";

const Diagnostics = () => {
    const dataDiagnostics = useSelector(dataDiagnosticsSelector);
    const dispatch = useDispatch();
    const { Page } = useParams();
    useEffect(() => {
        dispatch(getDiagnostics(Page));
        window.scrollTo(0, 0)
    }, [Page]);
    
    return (
        <div className="container">
            <div className="Diagnostics">
                <Description />
                <h4 >Умови для виконання:</h4>
                {dataDiagnostics.texts.map((el) => {
                    return <Text key={el.id} text={el.text} />;
                })}
                <div className="Diagnostics__row">
                    {dataDiagnostics.cards.map((item,index) => {
                        return (
                            <Item
                                index={index}
                                key={item.id}
                                title={item.title}
                                problem={item.problem}
                                text={item.text}
                                link={item.link}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Diagnostics;
