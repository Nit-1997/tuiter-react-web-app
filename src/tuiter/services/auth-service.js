import axios from "axios"
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL
const USERS_URL = `${SERVER_API_URL}/users`


const api = axios.create({ withCredentials: true })


export const login = async ({ username, password }) => {
    const response = await api.post(`${USERS_URL}/login`, { username, password })
    console.log("Login success")
    console.log(response.data)
    const user = response.data
    return user
};

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};
export const profile = async () => {
    try{
        const response = await api.post(`${USERS_URL}/profile`);
        return response;
    }catch (error){
        console.log(error);
    }
};
export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}/${user._id}`, user);
    return response.data;
};
export const register = async (user) => {
    const response = await api.post(`${USERS_URL}/register`, user)
    const responseUser = response.data
    console.log("API hit for registering users");
    console.log(responseUser);
    return responseUser
}
