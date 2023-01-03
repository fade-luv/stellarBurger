const orderRequestURL = "https://norma.nomoreparties.space/api/orders";
const ApiLink = "https://norma.nomoreparties.space";

export async function getOrderNumber(IDs) {
  return await fetch(orderRequestURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ ingredients: IDs }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(`Somthing wrong: ${res.status}`);
    })
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
