import axios from "axios"

export default class userService{
    getAll(){
        return axios.get("https://localhost:44365/api/User/getall")
    }
    add(branch) {
        return axios.post("https://localhost:44365/api/User/add", branch);
    }
} 