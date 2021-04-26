import axios from 'axios'
const { REACT_APP_SERVER_URL } = process.env;
const endPoint = `${REACT_APP_SERVER_URL}/buy`



class BuyModel {
    
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

export default BuyModel;