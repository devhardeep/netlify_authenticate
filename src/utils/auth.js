import GoTrue from 'gotrue-js';


const auth = new GoTrue({
  APIUrl: "https://romantic-mccarthy-28e0bb.netlify.com/.netlify/identity",
  setCookie: true,
});


export default auth;
