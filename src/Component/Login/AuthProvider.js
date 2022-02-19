import { createContext } from "react";
import useFarebase from "./useFarebase";


export const Authcon = createContext()
const AuthProvider = ({ children }) => {
    const allContext = useFarebase()
    return (
        <Authcon.Provider value={allContext}>
            {children}
        </Authcon.Provider>
    );
};

export default AuthProvider;