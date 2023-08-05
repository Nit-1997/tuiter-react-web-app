import React from "react";
import {Link, useLocation} from "react-router-dom";
import {FaHashtag} from "react-icons/fa";
import {CgBell, CgBookmark, CgHome, CgLogIn, CgMail, CgMoreR, CgNotes, CgProfile} from "react-icons/cg";
import "./index.css";
import { useSelector } from "react-redux";


const NavigationSidebar = () => {
    const { currentUser } = useSelector((state) => state.user);
    const {pathname} = useLocation();
    let [ignore, tuiter, active] = pathname.split("/");
    if(active === undefined){
        active = "login";
    }
    const links = [
        {link: "home", icon: <CgHome/> , currentUser : currentUser},
        {link: "explore", icon: <FaHashtag/> ,  currentUser : currentUser},
        {link: "notifications", icon: <CgBell/> ,  currentUser : currentUser},
        {link: "messages", icon: <CgMail/> ,  currentUser : currentUser},
        {link: "bookmarks", icon: <CgBookmark/> ,  currentUser : currentUser},
        {link: "lists", icon: <CgNotes/> ,  currentUser : currentUser},
        {link: "profile", icon: <CgProfile/> ,  currentUser : currentUser},
        {link: "more", icon: <CgMoreR/> ,  currentUser : currentUser},
        {link: "login" , icon: <CgLogIn/> ,  currentUser : !currentUser},
        {link: "register" , icon: <CgLogIn/> ,  currentUser : !currentUser},
    ];
    return (
        <div className="list-group">
            {links.map((link) =>
            link.currentUser && <Link to={`/tuiter/${link.link}`}
                      className={`list-group-item text-capitalize container ${active === link.link ? "active" : ""}`}>
                    <div className="row d-flex">
                        <div className="col-2 p-1">
                            {link.icon}
                        </div>
                        <div className="col-10 hidden-mobile-nav p-1">
                            {link.link}
                        </div>
                    </div>
                </Link>
            )}
        </div>
    );
};
export default NavigationSidebar;