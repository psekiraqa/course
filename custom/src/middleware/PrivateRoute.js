import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const PrivateRoute = ({children}) => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token === null) {
            navigate("/login");
            toast.warning("Please log in first");
        }
    }, []);
    return <>{children}</>
}
export default PrivateRoute;