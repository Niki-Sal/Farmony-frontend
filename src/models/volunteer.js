import axios from 'axios'

const endPoint = 'http://localhost:8000/api/volunteer'



class VolunteerModel {
    
    static all = () => {
        let request = axios.get(endPoint)
        return request
    }
    static create = (post)=>{
        let request = axios.post(endPoint, post)
        return request
    }
    static delete = (post) =>{
        let request = axios.delete(`${endPoint}/${post._id}` )
        return request
    }
    static find = (post) =>{
        let request = axios.find(`${endPoint}/${post._id}` )
        return request
    }
    static update = (postId, updatedPostObject) =>{
        let request = axios.put(`${endPoint}/${postId}`, updatedPostObject)
        return request
    }
}

export default VolunteerModel;