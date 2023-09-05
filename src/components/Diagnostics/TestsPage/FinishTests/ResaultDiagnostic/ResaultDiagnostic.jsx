import React, { useEffect, useState } from "react";
import "./ResaultDiagnostic.scss";
import img from "./../../../../../img/icons/che.webp";
import { useDispatch } from "react-redux";
import { changeSolution, deleteResult } from "../../testReducer";

const ResaultDiagnostic = ({ el, index, id, solution }) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, (index * 1000) / 2);
    }, []); //показати компонент через index*1000/2 мілісекунд
    return (
        <div className={show ? "show" : "noShow"}>
            <div
                onClick={() => dispatch(changeSolution(id))}
                className={solution ? "resaultDiagnostic" : "resaultDiagnostic resaultDiagnostic_active"}
            >
                {solution ? (
                    <div></div>
                ) : (
                    <div>
                        <img src={img} alt="ok" />
                    </div>
                )}
                <p>{el}</p>
                <button onClick={()=>dispatch(deleteResult(id))}>Delete</button>
            </div>
        </div>
    );
};

export default ResaultDiagnostic;
