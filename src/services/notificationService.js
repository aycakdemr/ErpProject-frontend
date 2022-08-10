import axios from "axios"

export default class notificationService{
    getAll(){
        return axios.get("https://localhost:44365/api/Notification/getall")
    }
} 