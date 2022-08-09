import axios from "axios"

export default class messageService{
    getbyreceiver(mail){
        return axios.get("https://localhost:44365/api/Message/getbyreceiver?mail="+mail)
    }
    getbysender(mail){
        return axios.get("https://localhost:44365/api/Message/getbysender?mail="+mail)
    }
    getById(id){
        return axios.get("https://localhost:44365/api/Message/getbyid?Id="+id)
    }
} 