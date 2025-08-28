export const setAccessToken = async tokenValue => {
  try {
    return await localStorage.setItem('access_token', tokenValue);
  } catch (err) {
    return null;
  }
};

export const getAccessToken = async () => {
  try {
    const tokenValue = await localStorage.getItem('access_token');

    return tokenValue;
  } catch (err) {
    return null;
  } 
};

export const removeAccessToken = async () => {
  try {
    return await localStorage.removeItem('access_token');
  } catch (err) {
    return null;
  }
};


