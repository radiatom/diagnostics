import React from "react";
import "./FinishTests.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resaultSelector } from "../../../selectors/selectors";
import { updateRes } from "../../../reactRedux/testReducer";
import ResaultDiagnostic from "./ResaultDiagnostic/ResaultDiagnostic";

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
                    <div>
                        <h3>Ось що вдалось вияснити:</h3>
                        <ul>
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
                        </ul>
                        <p>
                            Усувайте проблеми по одній або комплексно, щоб
                            вияснити, що було причиною. Рекомендовано усунути
                            всі проблеми відразу.{" "}
                            <span>
                                Після оновлення сторінки результати діагностики
                                зникнуть (збережіть цю інформацію)
                            </span>
                            .
                        </p>
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
