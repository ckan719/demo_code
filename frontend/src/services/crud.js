import HttpRequest from "./http-common";

const getAll = async () =>{
    return await HttpRequest.get("http://localhost:5000/user/all_noidung");
}

const getByTag = async (path) => {
    return await HttpRequest.get(`http://localhost:5000/user/noidung/${path}`);
}

const insertNoidung = (data) =>{
    return HttpRequest.post("http://localhost:5000/insert_noidung",data);
}

const insertGif = (data) => {
    return HttpRequest.post("http://localhost:5000/insert_gifs", data);
}

const getGifByPath = async (path) => {
    return await HttpRequest.get(`http://localhost:5000/user/gifs/${path}`);
}

export default {getAll, getByTag, insertNoidung, insertGif, getGifByPath};