import axios from "axios"

export default class tableService{
    getAll(){
        return axios.get("https://localhost:44365/api/Table/getall")
    }
} 