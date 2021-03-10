import axios from 'axios'

const endPoint = 'http://localhost:8000/holistichub'



class HolisticModel {
    
    static all = () => {
        let request = axios.get(endPoint)
        return request
    }
    static create = (post)=>{
        let request = axios.post(endPoint, post)
        return request
    }
    static delete = (post) =>{
        let request = axios.delete( )
        return request
    }
    static show = (post) => {
        let request = axios.show(`${endPoint}/${post._id}`)
        return request
    }
    
}

export default HolisticModel;