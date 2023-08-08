import React from "react";
import {AiFillDislike, AiFillHeart, AiOutlineHeart, AiOutlineUpload} from "react-icons/ai";
import {FaRetweet} from "react-icons/fa";
import {CgComment, CgTrash} from "react-icons/cg";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../services/tuits-thunks";

const TuitToolkit = ({tuit}) => {
    let likeIcon = null;
    if(tuit.liked){
        likeIcon = <AiFillHeart color={"red"}/>
    }else{
        likeIcon = <AiOutlineHeart/>
    }

    let dislikeIcon = null;
    if(tuit.disliked === undefined){
        dislikeIcon  = <AiFillDislike/>;
    }else if(tuit.disliked){
        dislikeIcon =  <AiFillDislike fill="#0D6EFD"/>
    }else{
        dislikeIcon = <AiFillDislike/>;
    }
    const dispatch = useDispatch();

    const dislikeTuitHandler = () => {
        //if(!tuit.disliked) {
            dispatch(updateTuitThunk({
                ...tuit, dislikes: tuit.dislikes ? tuit.dislikes + 1 : 1,
                disliked: true
            }))
       // }
    }

    const likeTuitHandler = () => {
        //if(!tuit.liked) {
            dispatch(updateTuitThunk({
                ...tuit, likes: tuit.likes + 1,
                liked: true
            }));
       // }
    }
    return(
                 <div className="row container d-flex">
                        <div className="col-2">
                            <CgComment/> {tuit.replies}
                        </div>
                        <div className="col-2">
                            <FaRetweet/> {tuit.retuits}
                        </div>
                        <div className="col-2"
                             onClick={() => likeTuitHandler()}>
                            {likeIcon} {tuit.likes}
                        </div>
                        <div className="col-2"
                             onClick={() => dislikeTuitHandler()
                                 }>
                            {dislikeIcon}{tuit.dislikes ? tuit.dislikes : 0}
                         </div>
                        <div className="col-2">
                            <AiOutlineUpload/>
                        </div>
                    </div>
    );
};
export default TuitToolkit;