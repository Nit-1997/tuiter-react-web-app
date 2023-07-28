import React, {useState} from "react";
import TuitList from "./tuits";
import TuitItem from "./tuits/tuit-item";
import {BiSolidBadgeCheck} from "react-icons/bi";
import TuitToolkit from "./tuits/tuit-toolkit";
import {ClipLoader, PacmanLoader} from "react-spinners";

function WorkInProgressScreen() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };
    return (
        <div>
            <h2>Work In Progress will be built soon in further assignments, stay tuned.</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row d-flex">
                        <div className="container col-lg-2 col-sm-12 d-lg-block justify-content-center">
                        </div>
                        <div className="container col-lg-10 col-sm-12 d-lg-block justify-content-center">
                                <PacmanLoader color="#0D6EFD"
                                              loading={loading}
                                              cssOverride={override}
                                              size={120}
                                              aria-label="Loading Spinner"
                                              data-testid="loader" />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}
export default WorkInProgressScreen;