import React from "react";
import "./tuit-item.css";
import {BiSolidBadgeCheck} from "react-icons/bi";
import TuitToolkit from "./tuit-toolkit";



const TuitItem = ({tuit}) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="container col-lg-2 col-sm-12 d-lg-block d-flex justify-content-center">
                    <img width={70} className="float-end rounded-circle" src={`/images/${tuit.image}`}/>
                </div>
                <div className="container col-lg-10 col-sm-12 d-lg-block">
                    <div> <span className="fw-bolder">{tuit.topic}</span>  <BiSolidBadgeCheck fill={"#0d6efd"}/> {tuit.handle} . {tuit.time}</div>
                    <div className="container">{tuit.tuit}</div>
                    <TuitToolkit tuit={tuit}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;