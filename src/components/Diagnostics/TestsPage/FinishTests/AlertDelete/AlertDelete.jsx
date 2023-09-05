import React from "react";
import "./AlertDelete.scss";
const AlertDelete = ({ setYesOrNo, setAlert }) => {
    return (
        <div className="alertDelete">
            <span>Видалити?</span>
            <button onClick={() => setYesOrNo(true)}>Так</button>
            <button onClick={() => setAlert(false)}>Ні</button>
        </div>
    );
};

export default AlertDelete;
