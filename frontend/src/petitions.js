import axios from "axios";

const urlApi ="http://localhost:3004/";

const getToken = () => {
  return localStorage.getItem("token");
};

const loginUser = (users) => {
    return axios.post(urlApi + "users", {
      users
    });
  };


const createUser = async (newUser) => {
    return await axios({
      method: "POST",
      url: urlApi + "users",
      headers: {
        authorization: `Bearer ${getToken()}`,
      },
      data: newUser,
    });
  };

  const getUsers = async () => {
    return await axios({
      method: "GET",
      url: urlApi + "users",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
    });
  };
  
export{
    loginUser, createUser, getUsers
}