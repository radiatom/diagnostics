import React, { useState } from "react";
import "./FinishTests.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resaultSelector } from "../../../../selectors/selectors";
import { updateRes } from "../Test/testReducer";
import ResaultDiagnostic from "./ResaultDiagnostic/ResaultDiagnostic";
import img from "./../../../../img/icons/che.webp";

const FinishTests = () => {
    const [time, setTime]=useState(1000)
    const resault = useSelector(resaultSelector);
    const dispatch = useDispatch();
    return (
        <div className="container">
            <div className="FinishTests">
                {resault[1] === undefined || resault[1].text === "" ? (
                    <div className="FinishTests__notProblem">
                        <h3>
                            Під час діагностики ніяких проблем не було знайдено.
                        </h3>
                        <NavLink
                            className="btnY"
                            to="/Diagnostics/All"
                            onClick={() => dispatch(updateRes())}
                        >
                            Почати нову діагностику
                        </NavLink>
                    </div>
                ) : (
                    <div className="FinishTests__list">
                        <p>
                            Усувайте проблеми по одній або комплексно, щоб
                            вияснити, що було причиною. Рекомендовано усунути
                            всі проблеми відразу.
                        </p>
                        <div className="FinishTests__icon">
                            <div>
                                <img src={img} alt="ok" />
                            </div>{" "}
                            <p>- проблема вирішена</p>
                        </div>
                        <h3>Список того що вдалось вияснити:</h3>
                        <div className="FinishTests__resault">
                            {resault.map((item,index) => {
                                if (item.text !== "") {
                                    return (
                                        <ResaultDiagnostic
                                            key={item.id}
                                            el={item.text}
                                            index={index}
                                        />
                                    );
                                }
                            })}
                        </div>
                            <NavLink className="btnY" to="/Diagnostics/All">
                                    Почати нову діагностику
                            </NavLink>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FinishTests;
