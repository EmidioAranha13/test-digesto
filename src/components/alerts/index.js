import React from "react";
import { useDispatch } from "react-redux";
import './index.css';
import { appCleanState } from "../../redux/actions";

export const Alert = (props) => {
    const {error} = props;
    const dispatch = useDispatch();

    return(
        <div className="alert alert-dismissible alert-danger alert-ms">
            <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={() => dispatch(appCleanState())}></button>
            <strong>Ops!!</strong> {error}.
        </div>
    );
};