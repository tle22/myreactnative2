const url_login = "http://192.168.1.133/mylaravel8/public/api/sanctum/token";
const url_register =
  "http://192.168.1.133/mylaravel8/public/api/sanctum/token/register";
const url_user = "http://192.168.1.133/mylaravel8/public/api/user";

const login = async (item) => {
  try {
    let body = {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    };
    let response = await fetch(url_login, body);
    let result = await response.json();
    if (result.token) {
      result = result.token.split("|").pop();
      return result;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

const register = async (item) => {
  try {
    let body = {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    };
    let response = await fetch(url_register, body);
    let result = await response.json();
    if (result.token) {
      result = result.token.split("|").pop();
      return result;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (userToken) => {
  try {
    let body = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userToken,
      },
    };
    let response = await fetch(url_user, body);
    let result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default { login, register, getUser };
