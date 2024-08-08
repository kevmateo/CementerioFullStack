import { useEffect } from "react";
import { authService } from "../services/authServices";
import { useNavigate } from "react-router-dom";

export function AuthProvider({ children }) {

  const navigate = useNavigate()

  useEffect(() => {
    const checkSession = () => {
      const isTokenValid = authService.checkTokenExpiration()
      if (!isTokenValid) {
        console.log('Token is expired or invalid. Redirecting...')
        authService.logout()
        navigate('/')
      }
    }
    checkSession()
    const intervalId = setInterval(checkSession, 10000)

    return () => {
      clearInterval(intervalId)
    }
  }, [navigate])

  return (
    <>
      {children}
    </>
  )
}