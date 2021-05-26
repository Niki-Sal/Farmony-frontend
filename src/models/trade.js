import axios from 'axios'
const { REACT_APP_SERVER_URL } = process.env;
const endPoint = `${REACT_APP_SERVER_URL}/trade`



class TradeModel {
    
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

export default TradeModel;