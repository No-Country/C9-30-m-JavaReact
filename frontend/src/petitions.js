import axios from "axios";

const urlApi = "https://argfounding-production.up.railway.app/auth";

export const loginUser = async (data) => {
  const response = await axios.post(`${urlApi}/login`, data);
  return response.data.jwt;
};

const createUser = async (newUser) => {
  const response = await axios.post(`${urlApi}/register`, newUser);
  return response.data;
};

// export const validateUser = async (user) => {
//   let res = false;
//   const users = await getUsers();
//   users.map((u) => {
//     if (u.email === user.email && u.password === user.password) {
//       res = true;
//     }
//   });
//   return res;
// };

// const getUsers = async () => {
//   const response = await axios({
//     method: "GET",
//     url: urlApi + "users",
//     headers: {
//       "content-type": "application/json",
//       authorization: `Bearer ${getToken()}`,
//     },
//   });
//   return response.data;
// };

export { createUser };
