import React from "react";
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row d-flex">
                <div className="col-lg-3 col-md-12 d-lg-block">
                    <img className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`}/>
                </div>
                <div className="col-lg-6 col-md-12 d-lg-block">
                    <div className="">
                        <div className="fw-bold">
                            {who.userName}
                        </div>
                        <div className="">
                            @{who.handle}
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 d-lg-block">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;