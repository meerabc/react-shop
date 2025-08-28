export const setAccessToken = async tokenValue => {
  try {
    return await localStorage.setItem('access_token', tokenValue);
  } catch (e) {
    return null;
  }
};

export const getAccessToken = async () => {
  try {
    const tokenValue = await localStorage.getItem('access_token');

    return tokenValue;
  } catch (e) {
    return null;
  } 
};

export const removeAccessToken = async () => {
  try {
    return await localStorage.removeItem('access_token');
  } catch (e) {
    return null;
  }
};


