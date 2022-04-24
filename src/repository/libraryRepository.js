import axios from '../custom-axios/axios';

const EShopService = {
    fetchCountries: () => {
        return axios.get("/country/");
    },
    fetchAuthors: () => {
        return axios.get("/author/");
    },
    fetchBooks: () => {
        return axios.get("/book/");
    },
    deleteBook: (id) => {
        return axios.delete(`/book/delete/${id}`);
    },
    addBook: (name, category, authorId,availableCopies) => {
        return axios.post("/book/add", {
            "name": name,
            "category": category,
            "authorId": authorId,
            "availableCopies": availableCopies
        });
    },
    editBook: (id,name, category, authorId,availableCopies) => {
        return axios.put(`/book/edit/${id}`, {
            "name": name,
            "category": category,
            "authorId": authorId,
            "availableCopies": availableCopies
        });
    },
    getBook: (id) => {
        return axios.get(`/book/${id}`);
    },
}

export default EShopService;
