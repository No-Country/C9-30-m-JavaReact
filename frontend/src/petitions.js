import axios from "axios";

const urlApi = "http://localhost:3004/";

const getToken = () => {
  return localStorage.getItem("token");
};

export const validateUser = async (user) => {
  let res = false;
  const users = await getUsers();
  users.map((u) => {
    if (u.email === user.email && u.password === user.password) {
      res = true;
    }
  });
  return res;
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
  const response = await axios({
    method: "GET",
    url: urlApi + "users",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
  });
  return response.data;
};

export { createUser, getUsers };
