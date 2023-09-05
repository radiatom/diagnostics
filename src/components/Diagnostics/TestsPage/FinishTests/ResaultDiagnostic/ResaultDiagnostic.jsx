import React, { useEffect, useState } from "react";
import "./ResaultDiagnostic.scss";
import img from "./../../../../../img/icons/che.webp";
import { useDispatch } from "react-redux";
import { changeSolution, deleteResult } from "../../testReducer";
import AlertDelete from "../AlertDelete/AlertDelete";

const ResaultDiagnostic = ({ el, index, id, solution }) => {
    const [alert, setAlert] = useState(false);
    const [yesOrNo, setYesOrNo] = useState(false);
    useEffect(() => {
        if (yesOrNo) {
            dispatch(deleteResult(id));
        }
    }, [yesOrNo]);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, (index * 1000) / 2);
    }, []); //показати компонент через index*1000/2 мілісекунд
    return (
        <div className={show ? "show" : "noShow"}>
            <div className={solution ? "resaultDiagnostic" : "resaultDiagnostic resaultDiagnostic_active"}>
                {solution ? (
                    <div onClick={() => dispatch(changeSolution(id))}></div>
                ) : (
                    <div onClick={() => dispatch(changeSolution(id))}>
                        <img src={img} alt="ok" />
                    </div>
                )}
                <p>{el}</p>
                <button className="resaultDiagnostic__btnDelete" onClick={() => setAlert(true)}>
                    Видалити
                </button>
            </div>
            <div className={alert?"blur":''}></div>
            {alert ? <AlertDelete setYesOrNo={setYesOrNo} setAlert={setAlert} /> : ""}
        </div>
    );
};

export default ResaultDiagnostic;
