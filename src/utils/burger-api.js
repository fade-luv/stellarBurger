const orderRequestURL = "https://norma.nomoreparties.space/api/orders";
const ApiLink = "https://norma.nomoreparties.space";
const newUserLink = "https://norma.nomoreparties.space/api/auth/register";
const forgotPasswordLink = "https://norma.nomoreparties.space/api/password-reset";
const passwordResetLink =
  "https://norma.nomoreparties.space/api/password-reset/reset";


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


export async function createUser(params) {
  return await fetch(newUserLink, {
    method: "POST",
    headers: {
      authorization: "5743d2b2-8d60-4e50-9a9c-7a3ab60b2c12",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "bombardir2001@mail.ru",
      password: "Xyesos2x21",
      name: "Sergey.B",
    }),
  })
  .then ((res) => {
    if (res.ok) {
      console.log(res);
    }
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
