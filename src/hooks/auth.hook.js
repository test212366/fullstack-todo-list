import {useState, useEffect,useCallback} from "react";

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userID, setUserID] = useState(null)
    const [isReady, setIsReady] = useState(false)


    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken)
        setUserID(id)
        localStorage.setItem('userData', JSON.stringify(
            {userID: id, token: jwtToken}
        ))
    }, [])
    const logout = useCallback(() => {
        setToken(null)
        setUserID(null)
        return localStorage.removeItem('userData')
    }, [])
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'))
        if (data && data.token) {
            login(data.token, data.userID)
        }
        setIsReady(true)
    }, [login])
    return {login, logout, token,userID, isReady}
}