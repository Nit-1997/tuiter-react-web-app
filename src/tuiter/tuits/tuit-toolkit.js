import React from "react";
import {AiFillHeart, AiOutlineHeart, AiOutlineUpload} from "react-icons/ai";
import {FaRetweet} from "react-icons/fa";
import {CgComment, CgTrash} from "react-icons/cg";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";

const TuitToolkit = ({tuit}) => {
    let likeIcon = null;
    if(tuit.liked){
        likeIcon = <AiFillHeart color={"red"}/>
    }else{
        likeIcon = <AiOutlineHeart/>
    }
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
                 <div className="row container d-flex">
                        <div className="col-2">
                            <CgComment/> {tuit.replies}
                        </div>
                        <div className="col-2">
                            <FaRetweet/> {tuit.retuits}
                        </div>
                        <div className="col-2">
                            {likeIcon} {tuit.likes}
                        </div>
                        <div className="col-2">
                            <AiOutlineUpload/>
                        </div>
                        <div className="col-2">
                            <CgTrash onClick={() => deleteTuitHandler(tuit._id)}/>
                        </div>
                    </div>
    );
};
export default TuitToolkit;