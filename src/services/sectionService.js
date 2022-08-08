import axios from "axios"

export default class sectionService{
    getAll(){
        return axios.get("https://localhost:44365/api/Section/getall")
    }
    getById(id){
        return axios.get("https://localhost:44365/api/Section/getbyid?carId="+id)
    }
}  
