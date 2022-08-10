import axios from "axios"

export default class contactService{
    getAll(){
        return axios.get("https://localhost:44365/api/Branch/getall")
    }
    add(contact) {
        return axios.post("https://localhost:44365/api/Contact/add", contact);
    }
} 