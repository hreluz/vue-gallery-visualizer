import axios from "axios";

const galleryAPi = axios.create({
    baseURL: 'https://galleryio-ba4b9-default-rtdb.firebaseio.com',
});

export default galleryAPi