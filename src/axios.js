import axios from 'axios'

const API = axios.create({
    baseURL: 'https://zionn-stage.herokuapp.com/'
    // baseURL: 'http://localhost:8080/'

})

API.interceptors.request.use((req) => {
    return req
})


export const userTableData = async () => {


    let userdata = await API.get('/transaction/getUserInv')

    return userdata;
}

export const inventoryTableData = async () => {


    let userdata = await API.get('/transaction/cmpShareDetail')

    return userdata;
}
