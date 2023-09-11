import axios from "axios";


export const getAllBooks = () => axios.get("https://www.googleapis.com/books/v1/volumes?q=all&key=AIzaSyCSZfVPxJpz7vkbBkZGMwHrnW3hizJ9tys"+"&maxResults=40");