import React from "react";
import TuitList from "../tuits";
import WhatsHappening from "../whats-happening";

function HomeScreen() {
    return (
        <div>
            <h2>Home</h2>
            <WhatsHappening/>
            <TuitList/>
        </div>
    );
}
export default HomeScreen;