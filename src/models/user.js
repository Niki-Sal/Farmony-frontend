import axios from 'axios'
const { REACT_APP_SERVER_URL } = process.env;
const endPoint = `${REACT_APP_SERVER_URL}/users`



class UserModel {
    
    static all = () => {
        let request = axios.get(endPoint)
        return request
    }
    static create = (user)=>{
        let request = axios.post(endPoint, user)
        return request
    }
    static delete = (user) =>{
        let request = axios.delete(`${endPoint}/${user._id}` )
        return request
    }
    static find = (user) =>{
        let request = axios.find(`${endPoint}/${user._id}` )
        return request
    }
    static update = (userId, updatedUserObject) =>{
        let request = axios.put(`${endPoint}/${userId}`, updatedUserObject )
        return request
    }
    static oneUser = (userId) =>{
        let request = axios.get(`${endPoint}/${userId}`)
        return request
    }
}

export default UserModel