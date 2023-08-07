import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {profileThunk, logoutThunk, updateUserThunk}
    from "../services/auth-thunks";
import {findTuitsThunk} from "../services/tuits-thunks";

function ProfileScreen() {
    const {currentUser} = useSelector((state) => state.user);
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const save = async () => {
        await dispatch(updateUserThunk(profile));
        alert("Saved Success")
    }

    useEffect(() => {
        dispatch(findTuitsThunk())
        const loadProfile = async () => {
            const { payload } = await dispatch(profileThunk());
            if (payload) {
                setProfile(payload)
            }
        };
        if(!profile){
             loadProfile();
        }
    }, []);

    return (
        <div>
            {profile ? ( <div>
                <h1>Profile Screen</h1>
                <div>
                        <div className="mt-2">
                            <label className="form-label">First Name</label>
                            <input className="form-control" type="text" value={profile.firstName}
                                   onChange={(event) => {
                                       const newProfile = {
                                           ...profile, firstName: event.target.value,
                                       };
                                       setProfile(newProfile);
                                   }}/>
                        </div>
                        <div className="mt-2">
                            <label className="form-label">Last Name</label>
                            <input className="form-control" type="text" value={profile.lastName}
                                   onChange={(event) => {
                                       const newProfile = {
                                           ...profile, lastName: event.target.value,
                                       };
                                       setProfile(newProfile);
                                   }}/>
                        </div>
                    </div>
                <div className="d-flex">
                    <div>
                        <button className="m-1 btn btn-primary"
                                onClick={() => {
                                    dispatch(logoutThunk());
                                    navigate("/tuiter/login");
                                }} >
                            Logout
                        </button>
                    </div>
                    <br/>
                    <div>
                        <button className="m-1 btn btn-primary"
                                onClick={save}>
                            Save
                        </button>
                    </div>
                </div>
            </div>) : <h1>Auth Failed / Incorrect Credentials , Login Again.....</h1>}
        </div>
    );
}

export default ProfileScreen;