const orderRequestURL = "https://norma.nomoreparties.space/api/orders";
const ApiLink = "https://norma.nomoreparties.space";



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


export async function getIngredientsData(params) {
  return await fetch(`${ApiLink}/api/ingredients`)
  .then ((res) => {
    if (res.ok)  {
      return res.json();
    }
    throw new Error(`Somthing wrong: ${res.status}`);
  })
}
