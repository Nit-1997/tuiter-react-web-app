import React from "react";
import {Link, useLocation} from "react-router-dom";
import {FaHashtag} from "react-icons/fa";
import {CgBell, CgBookmark, CgHome, CgMail, CgMoreR, CgNotes, CgProfile} from "react-icons/cg";
import "./index.css";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    let [ignore, tuiter, active] = pathname.split("/");
    if(active === undefined){
        active = "home";
    }
    const links = [
        {link: "home", icon: <CgHome/>},
        {link: "explore", icon: <FaHashtag/>},
        {link: "notifications", icon: <CgBell/>},
        {link: "messages", icon: <CgMail/>},
        {link: "bookmarks", icon: <CgBookmark/>},
        {link: "lists", icon: <CgNotes/>},
        {link: "profile", icon: <CgProfile/>},
        {link: "more", icon: <CgMoreR/>}
    ];
    return (
        <div className="list-group">
            {links.map((link) =>
                <Link to={`/tuiter/${link.link}`}
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