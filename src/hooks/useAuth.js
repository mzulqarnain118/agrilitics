import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
    let response = useContext(AuthContext)
    return response;
}

export default useAuth;