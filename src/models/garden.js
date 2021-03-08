import axios from 'axios'

const endPoint = 'http://localhost:8000/api/gardens'



class GardenModel {
    
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
}

export default GardenModel