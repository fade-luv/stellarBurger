const orderRequestURL = "https://norma.nomoreparties.space/api/orders";
const ApiLink = "https://norma.nomoreparties.space";
const forgotPasswordLink =
  "https://norma.nomoreparties.space/api/password-reset";
const passwordResetLink =
  "https://norma.nomoreparties.space/api/password-reset/reset";
const registrationLink = "https://norma.nomoreparties.space/api/auth/register";
const updateTokenLink = "https://norma.nomoreparties.space/api/auth/token";


const authorizationLink = "https://norma.nomoreparties.space/api/auth/login";
const LogOutLink = "https://norma.nomoreparties.space/api/auth/logout";
const updateUserDataLink = "https://norma.nomoreparties.space/api/auth/user";
const getUserDataLink = "https://norma.nomoreparties.space/api/auth/user";
export async function getOrderNumber(IDs) {
  return await fetch(orderRequestURL, {
    method: "POST",
    headers: {
      authorization: "5743d2b2-8d60-4e50-9a9c-7a3ab60b2c12",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: IDs,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(`Somthing wrong: ${res.status}`);
  });
}


export async function updateTokenRequest(updateUserData, name, email) {
  return await fetch(updateTokenLink, {
    method: "POST",
    headers: {
      authorization: "5743d2b2-8d60-4e50-9a9c-7a3ab60b2c12",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: window.localStorage.getItem("refreshToken"),
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      localStorage.setItem("refreshToken", res.refreshToken);
      localStorage.setItem("accessToken", res.accessToken);
    }).then((res) => {
      updateUserData(name,email)
    });
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
    return res.json();
  })
}

export async function authorezationRequest(email, password) {
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
    return res.json();
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
      name: registerNameValue,
      password: registerPasswordValue,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(`Somthing wrong: ${res.status}`);
  });
}

export async function resetPasswordRequest(obj) {
  const { newPassword, code } = obj;

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




export async function getUserInfo() {
  return await fetch(getUserDataLink, {
    method: "GET",
    headers: {
      Authorization: window.localStorage.getItem("accessToken"),
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }else if (res.status === 403) {
      updateTokenRequest(getUserInfo);
    }
  })
}

export async function updateUserData(name, email, password) {
  return await fetch(updateUserDataLink, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: window.localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({
      email: email,
      name: name,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else if (res.status === 403) {
      updateTokenRequest(updateUserData, name, email);
    }
  });
}

export async function exiteRequest(refreshToken) {
  return await fetch(LogOutLink, {
    method: "POST",
    headers: {
      authorization: "5743d2b2-8d60-4e50-9a9c-7a3ab60b2c12",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: refreshToken,
    }),
  })
}

export async function getIngredientsData(params) {
  return await fetch(`${ApiLink}/api/ingredients`).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(`Somthing wrong: ${res.status}`);
  });
}



