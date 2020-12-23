// import moment from 'moment';
// import jwtDecode from 'jwt-decode';

// export const baseUrl = `${process.env.REACT_APP_API_URL}`;

// export const GET = 'GET';
// export const POST = 'POST';
// export const PUT = 'PUT';
// export const DELETE = 'DELETE';


// export const tipoJuego = [
//   { id: 1, name: "Single" },
//   { id: 2, name: "Double" },
//   { id: 3, name: "Clase privada" },
//   { id: 4, name: "Torneo" },
// ]

// export const makeUrlGET = (objs) => {
//   let params = [];
//   for (const key in objs) {
//     const val = objs[key];
//     if (val) {
//       params.push(`${key}=${val}`);
//     }
//   }
//   return params.join('&');
// };

// export const CreateAuthRequest = async (method, body, isJson = true) => {
//   const token = await UpdateToken();
//   const request = {
//     method,
//     headers: new Headers({
//       "authorization": `Bearer ${token}`,
//       'Content-Type': 'application/json'
//     }),
//   };
//   if (isJson) {
//     if (body) {
//       request.body = JSON.stringify(body);
//     }
//   } else {
//     request.headers.delete('Content-Type');
//     request.body = body;
//   }

//   return request;
// };

// const refreshToken = () => {
//   let url = baseUrl + 'auth/token';
//   let headers = new Headers();
//   headers.append("authorization", `Bearer ${localStorage.token}`);
//   let request = { method: POST, headers }
//   return fetch(url, request)
//     .then(response => response.json())
//     .then(response => response.token)
// };

// export const UpdateToken = async () => {

//   if (localStorage.token && localStorage.token !== "undefined") {
//     const currentTime = moment().unix();
//     const decoded = jwtDecode(localStorage.token);
//     if (decoded.exp < currentTime) {
//       const currentToken = await refreshToken();
//       localStorage.setItem("token", currentToken);
//       return localStorage.getItem("token");
//     }
//     else {
//       return localStorage.getItem("token");
//     }
//   }
//   else {
//     localStorage.removeItem("token");
//     return null;
//   }
// };

export const fetchData = async (url, request) => new Promise((resolve, reject) => fetch(`${url}`, request)
  .then(response => {
    if (response.status === 200 || response.status === 201) {
      resolve(response.json());
    } else {
      reject(response.json());
    }
  })
  .catch(error => {
    reject(error);
  }));