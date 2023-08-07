import React from "react";
import TuitList from "../tuits";
import WhatsHappening from "../whats-happening";
import {useSelector} from "react-redux";

function HomeScreen() {
    const {currentUser} = useSelector((state) => state.user);
    return (
        <div>
            {(currentUser === undefined || currentUser === null) ? <h1> 401 Unauthorized , Login Please! </h1> :
                <div>
                    <h2>Home</h2>
                    <WhatsHappening/>
                    <TuitList/>
                </div>
            }
        </div>
    );
}

export default HomeScreen;