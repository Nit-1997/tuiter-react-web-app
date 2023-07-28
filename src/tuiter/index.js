import {Routes, Route} from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import WhoToFollowList from "./who-to-follow-list";

import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import WorkInProgressScreen from "./work-in-progress-screen";
import "./index.css"

const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer}});


function Tuiter() {
    return (
        <Provider store={store}>
            <div>
                <Nav/>
                <div className="row">
                    <div className="col-lg-9  col-md-12">
                        <div className="row">
                            <div className="col-3">
                                <NavigationSidebar/>
                            </div>
                            <div className="col-9">
                                <Routes>
                                    <Route path="/*" element={<HomeScreen/>}/>
                                    <Route path="/explore" element={<ExploreScreen/>}/>
                                    <Route path="/bookmarks" element={<WorkInProgressScreen/>}/>
                                    <Route path="/profile" element={<WorkInProgressScreen/>}/>
                                    <Route path="/messages" element={<WorkInProgressScreen/>}/>
                                    <Route path="/lists" element={<WorkInProgressScreen/>}/>
                                    <Route path="/more" element={<WorkInProgressScreen/>}/>
                                    <Route path="/notifications" element={<WorkInProgressScreen/>}/>
                                </Routes>
                            </div>
                        </div>
                    </div>
                    <div className="container hidden-mobile col-lg-3">
                        <WhoToFollowList/>
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter;