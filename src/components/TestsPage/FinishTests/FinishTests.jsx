import React from "react";
import "./FinishTests.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resaultSelector } from "../../../selectors/selectors";
import { updateRes } from "../../../reactRedux/testReducer";
import ResaultDiagnostic from "./ResaultDiagnostic/ResaultDiagnostic";
import img from './../../../img/icons/che.png'


const FinishTests = () => {
    const resault = useSelector(resaultSelector);
    const dispatch = useDispatch();
    return (
        <div className="container">
            <div className="FinishTests">
                {resault[1] === undefined || resault[1].text === "" ? (
                    <div>
                        <h3>
                            Під час діагностики ніяких проблем не було знайдено.
                        </h3>
                        <div className="navlink">
                            <NavLink to="/Diagnostics/All">
                                <button
                                    onClick={() => dispatch(updateRes())}
                                    className="btnY"
                                >
                                    Почати нову діагностику
                                </button>
                            </NavLink>
                        </div>
                    </div>
                ) : (
                    <div className="FinishTests__list">
                        <p>
                            Усувайте проблеми по одній або комплексно, щоб
                            вияснити, що було причиною. Рекомендовано усунути
                            всі проблеми відразу.
                        </p>
                        <div className="FinishTests__icon">
                            <div><img src={img}  alt="ok" /></div> <p>- проблема вирішена</p>
                        </div>
                        <h3>Список того що вдалось вияснити:</h3>
                        <div>
                            {resault.map((el) => {
                                if (el.text !== "") {
                                    return (
                                        <ResaultDiagnostic
                                            key={el.id}
                                            el={el.text}
                                        />
                                    );
                                }
                            })}
                        </div>
                        <div className="navlink">
                            <NavLink to="/Diagnostics/All">
                                <button className="btnY">
                                    Почати нову діагностику
                                </button>
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FinishTests;
