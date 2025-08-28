export const setAccessToken = (tokenValue) => {
      localStorage.setItem('access_token', tokenValue)
}

export const getAccessToken = () => {
    return  localStorage.getItem('access_token')
}

export const removeAccessToken = () => {
      localStorage.removeItem('access_token')
}