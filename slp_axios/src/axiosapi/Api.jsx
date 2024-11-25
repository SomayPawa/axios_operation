import axios from "axios";
const api = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com",
});

export const getpost = () => {
    return api.get("/posts");
}

export const deletepost = (id) => {
    return api.delete(`/posts/${id}`);
}

// aab post kerna hai 
export const addpost = (data) => {
    return api.post("/posts",data);
}

// update the post

export const updatepost = (id,post) => {
    return api.put(`/posts/${id}`,post); // like iss id pe ye wali post daal do ye sab kuch background main ho raha hoga
}