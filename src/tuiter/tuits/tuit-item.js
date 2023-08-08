import React from "react";
import "./tuit-item.css";
import {BiSolidBadgeCheck} from "react-icons/bi";
import TuitToolkit from "./tuit-toolkit";
import {CgTrash} from "react-icons/cg";
import {deleteTuitThunk} from "../services/tuits-thunks";
import {useDispatch} from "react-redux";



const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="container col-lg-1 col-sm-12 d-lg-block text-danger" >
                    <CgTrash onClick={() => deleteTuitHandler(tuit._id)}/>
                </div>
                <div className="container col-lg-2 col-sm-12 d-lg-block d-flex justify-content-center">
                    <img width={70} className="float-end rounded-circle" src={`/images/${tuit.image}`}/>
                </div>
                <div className="container col-lg-9 col-sm-12 d-lg-block">
                    <div> <span className="fw-bolder">{tuit.topic}</span>  <BiSolidBadgeCheck fill={"#0d6efd"}/> {tuit.handle} . {tuit.time}</div>
                    <div className="container">{tuit.tuit}</div>
                    <TuitToolkit tuit={tuit}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;