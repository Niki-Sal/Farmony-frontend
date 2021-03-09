import axios from 'axios'

const endPoint = 'http://localhost:8000/api/users'



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
}

export default UserModel