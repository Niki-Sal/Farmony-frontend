import axios from 'axios'

const endPoint = 'http://localhost:8000/api/gardens'



class GardenModel {
    
    static all = () => {
        let request = axios.get(endPoint)
        return request
    }
    static query = (data) => {
        let request = axios.post(`${endPoint}/query`, data)
        console.log(data)
        console.log(request)
        return request
    }
    static create = (garden)=>{
        let request = axios.post(endPoint, garden)
        return request
    }
    static show = (garden)=>{
        let request = axios.show(`${endPoint}/${garden._id}`)
        return request
    }
    static delete = (garden) =>{
        let request = axios.delete(`${endPoint}/${garden._id}` )
        return request
    }
}

export default GardenModel