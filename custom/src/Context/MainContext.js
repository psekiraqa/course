import React, {createContext, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const  MainContext = createContext();

const MainProvider = ({ children }) => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const login = (username , password) => {
        axios.post("https://fakestoreapi.com/auth/login", {
            username: username,
            password: password,
        })
        .then((response) => {
            console.log(response.data)
            navigate("/")

            toast.success("You are logged in");
            localStorage.setItem("token", response.data.token);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const getProducts = () => {
        axios.get("https://fakestoreapi.com/products")
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error);
        })


    };
    console.log("Products:", getProducts());
    return (
        <MainContext.Provider value={{login,
        getProducts,}}>
            {children}
        </MainContext.Provider>
    )
}
export {MainContext, MainProvider};