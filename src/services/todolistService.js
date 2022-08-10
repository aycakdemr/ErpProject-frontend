import axios from "axios"

export default class todolistService{
    getAll(){
        return axios.get("https://localhost:44365/api/ToDoList/getall")
    }
} 