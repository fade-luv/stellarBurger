const orderRequestURL = "https://norma.nomoreparties.space/api/orders";
const ApiLink = "https://norma.nomoreparties.space";
const forgotPasswordLink = "https://norma.nomoreparties.space/api/password-reset";
const passwordResetLink =
  "https://norma.nomoreparties.space/api/password-reset/reset";
const registrationLink = "https://norma.nomoreparties.space/api/auth/register";

const authorizationLink = "https://norma.nomoreparties.space/api/auth/login";

export async function getOrderNumber(IDs) {
  return await fetch(orderRequestURL, {
    method: "POST",
    headers: {
      authorization: '5743d2b2-8d60-4e50-9a9c-7a3ab60b2c12',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "ingredients": IDs 
    })
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(`Somthing wrong: ${res.status}`);
    })
}


export async function forgotPasswordRequest(email) {

  return await fetch(forgotPasswordLink, {
    method: "POST",
    headers: {
      authorization: "5743d2b2-8d60-4e50-9a9c-7a3ab60b2c12",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  }).then((res) => {
    if (res.ok) {
      console.log(res);
    }
  });
}


export async function authorezationRequest(email, password) {
  console.log(email,  password);
  return await fetch(authorizationLink, {
    method: "POST",
    headers: {
      authorization: "5743d2b2-8d60-4e50-9a9c-7a3ab60b2c12",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((res) => {
    if (res.ok) {
      console.log(res);
    }
  });
}



export async function registrationRequest(newUserInfo) {
  let { registerEmailValue, registerNameValue, registerPasswordValue } =
    newUserInfo;
  return await fetch(registrationLink, {
    method: "POST",
    headers: {
      authorization: "5743d2b2-8d60-4e50-9a9c-7a3ab60b2c12",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: registerEmailValue,
      password: registerNameValue,
      name: registerPasswordValue,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(`Somthing wrong: ${res.status}`);
  });
}

export async function resetPasswordRequest(obj) {
  const {newPassword, code} = obj;

  return await fetch(passwordResetLink, {
    method: "POST",
    headers: {
      authorization: "5743d2b2-8d60-4e50-9a9c-7a3ab60b2c12",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: newPassword,
      token: code,
    }),
  }).then((res) => {
    if (res.ok) {
      console.log(res);
    }
  });
}


export async function getIngredientsData(params) {
  return await fetch(`${ApiLink}/api/ingredients`)
  .then ((res) => {
    if (res.ok)  {
      return res.json();
    }
    throw new Error(`Somthing wrong: ${res.status}`);
  })
}
