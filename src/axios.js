import axios from 'axios'

const API = axios.create({
    baseURL: 'https://zionn-stage.herokuapp.com/'
    // baseURL: 'http://localhost:8080/'
}) 

API.interceptors.request.use((req) => {
    if (localStorage.getItem('user')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
    }

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

export const userSignIn = async (userData) => {
    let res = await API.post("/auth/login", userData)
    return res;
}

export const userPageDetails = async (adminEmail, userUid) => {
    let res = await API.post(`/admin/users?c_id=${userUid}`, adminEmail)
    return res;
}

export const isAuth = async (email) => {
    let res = await API.post("/admin/check", email)
    return res;
}

export const updateUserData = async ({ user_name, email, u_id, phone, curr_employer, designation, tenure }) => {
    let res = await API.post("/admin/updateuser", { user_name, email, u_id, phone, curr_employer, designation, tenure })
    return res;
}

export const addNewUser = async ({user_name, email, phone, curr_employer, designation, tenure }) => {
    let res = await API.post("/admin/adduser", { user_name, email, phone, curr_employer, designation, tenure })
    return res;
}

export const addUserInv = async (sharedata) => {
    let res = await API.post("/admin/addadminInv", sharedata)
    return res;
}