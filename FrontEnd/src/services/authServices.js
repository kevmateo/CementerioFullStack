
export const authService = {
  checkTokenExpiration: () => {
    const token = localStorage.getItem('access_token')

    if (!token) {
      localStorage.removeItem('access_token')
      localStorage.removeItem('userRole')
      localStorage.removeItem('userCI')
      return false
    }

    //const cookieExists = document.cookie.split(';').some((item) => item.trim().startsWith('access_token='))
    //if (!cookieExists) {
    //  localStorage.removeItem('access_token')
    //  localStorage.removeItem('userRole')
    //  return false
    //}

    try {
      const tokenPayload = JSON.parse(atob(token.split('.')[1]))
      const isTokenExpired = tokenPayload.exp * 1000 < Date.now()

      if (isTokenExpired) {
        localStorage.removeItem('access_token')
        localStorage.removeItem('userRole')
        localStorage.removeItem('userCI')
        return false
      }

      return true
    } catch (error) {
      localStorage.removeItem('access_token')
      localStorage.removeItem('userRole')
      localStorage.removeItem('userCI')
      return false
    }
  },

  logout: () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('userRole')
    localStorage.removeItem('userCI')
  }
}