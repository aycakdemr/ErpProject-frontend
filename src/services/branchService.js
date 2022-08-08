import axios from "axios"

export default class branchService{
    getAll(){
        return axios.get("https://localhost:44365/api/Branch/getall")
    }
} 