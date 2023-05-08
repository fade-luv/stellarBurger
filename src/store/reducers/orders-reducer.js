const initialState = {
   orders : [
    {
      _id: "413543f31237435689abeca2db74ee39",
      orderNumber: "034535",
      orderTitle: "Мясной бургер с астронавтскими рисовыми картошками",
      orderDate: "23:00",
      ingredients: [
        {
          _id: "60666c42cc7b410027a1a9b1",
          name: "Краторная булка N-200i",
          type: "bun",
          proteins: 80,
          fat: 24,
          carbohydrates: 53,
          calories: 420,
          price: 1255,
          image: "https://code.s3.yandex.net/react/code/bun-02.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
          __v: 0,
        },
        {
          _id: "60666c42cc7b410027a1a9b5",
          name: "Говяжий метеорит (отбивная)",
          type: "main",
          proteins: 800,
          fat: 800,
          carbohydrates: 300,
          calories: 2674,
          price: 3000,
          image: "https://code.s3.yandex.net/react/code/meat-04.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
          image_large:
            "https://code.s3.yandex.net/react/code/meat-04-large.png",
          __v: 0,
        },
        {
          _id: "60666c42cc7b410027a1a9b6",
          name: "Биокотлета из марсианской Магнолии",
          type: "main",
          proteins: 420,
          fat: 142,
          carbohydrates: 242,
          calories: 4242,
          price: 424,
          image: "https://code.s3.yandex.net/react/code/meat-01.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
          image_large:
            "https://code.s3.yandex.net/react/code/meat-01-large.png",
          __v: 0,
        },
        {
          _id: "60666c42cc7b410027a1a9b5",
          name: "Говяжий метеорит (отбивная)",
          type: "main",
          proteins: 800,
          fat: 800,
          carbohydrates: 300,
          calories: 2674,
          price: 3000,
          image: "https://code.s3.yandex.net/react/code/meat-04.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
          image_large:
            "https://code.s3.yandex.net/react/code/meat-04-large.png",
          __v: 0,
        },
      ],
      orderPrice: 503,
    },

    {
      _id: "93ae7be2-8a2b-4e9e-8754-feb929407677",
      orderNumber: "024682",
      orderTitle: "Веганский бургер с космическими овощами",
      orderDate: "15:30",
      ingredients: [
        {
          _id: "60666c42cc7b410027a1a9b1",
          name: "Краторная булка N-200i",
          type: "bun",
          proteins: 80,
          fat: 24,
          carbohydrates: 53,
          calories: 420,
          price: 1255,
          image: "https://code.s3.yandex.net/react/code/bun-02.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
          __v: 0,
        },
        {
          _id: "60666c42cc7b410027a1a9b5",
          name: "Говяжий метеорит (отбивная)",
          type: "main",
          proteins: 800,
          fat: 800,
          carbohydrates: 300,
          calories: 2674,
          price: 3000,
          image: "https://code.s3.yandex.net/react/code/meat-04.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
          image_large:
            "https://code.s3.yandex.net/react/code/meat-04-large.png",
          __v: 0,
        },
        {
          _id: "60666c42cc7b410027a1a9b6",
          name: "Биокотлета из марсианской Магнолии",
          type: "main",
          proteins: 420,
          fat: 142,
          carbohydrates: 242,
          calories: 4242,
          price: 424,
          image: "https://code.s3.yandex.net/react/code/meat-01.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
          image_large:
            "https://code.s3.yandex.net/react/code/meat-01-large.png",
          __v: 0,
        },
      ],
      orderPrice: 353,
    },
    {
      _id: "02b69b33-094a-4bb0-9c68-127333a5ad73",
      orderNumber: "643294",
      orderTitle: "Бургер суперкосмос",
      orderDate: "18:20",
      ingredients: [
        {
          _id: "60666c42cc7b410027a1a9b1",
          name: "Краторная булка N-200i",
          type: "bun",
          proteins: 80,
          fat: 24,
          carbohydrates: 53,
          calories: 420,
          price: 1255,
          image: "https://code.s3.yandex.net/react/code/bun-02.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
          __v: 0,
        },
        {
          _id: "60666c42cc7b410027a1a9b6",
          name: "Биокотлета из марсианской Магнолии",
          type: "main",
          proteins: 420,
          fat: 142,
          carbohydrates: 242,
          calories: 4242,
          price: 424,
          image: "https://code.s3.yandex.net/react/code/meat-01.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
          image_large:
            "https://code.s3.yandex.net/react/code/meat-01-large.png",
          __v: 0,
        },
      ],
      orderPrice: 983,
    },

    {
      _id: "7a468d7c-172e-44c7-b89e-1ddb9b39738d",
      orderNumber: "034535",
      orderTitle: "Мангальский бургер с астронавтскими помидорами",
      orderDate: "12:10",
      ingredients: [
        {
          _id: "60666c42cc7b410027a1a9b1",
          name: "Краторная булка N-200i",
          type: "bun",
          proteins: 80,
          fat: 24,
          carbohydrates: 53,
          calories: 420,
          price: 1255,
          image: "https://code.s3.yandex.net/react/code/bun-02.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
          __v: 0,
        },
        {
          _id: "60666c42cc7b410027a1a9b5",
          name: "Говяжий метеорит (отбивная)",
          type: "main",
          proteins: 800,
          fat: 800,
          carbohydrates: 300,
          calories: 2674,
          price: 3000,
          image: "https://code.s3.yandex.net/react/code/meat-04.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
          image_large:
            "https://code.s3.yandex.net/react/code/meat-04-large.png",
          __v: 0,
        },
        {
          _id: "60666c42cc7b410027a1a9b6",
          name: "Биокотлета из марсианской Магнолии",
          type: "main",
          proteins: 420,
          fat: 142,
          carbohydrates: 242,
          calories: 4242,
          price: 424,
          image: "https://code.s3.yandex.net/react/code/meat-01.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
          image_large:
            "https://code.s3.yandex.net/react/code/meat-01-large.png",
          __v: 0,
        },
      ],
      orderPrice: 543,
    },

    {
      _id: "c18867e3-ef01-4019-ab1a-3863440d5853",
      orderNumber: "93572",
      orderTitle: "Запеченный бургер с шашлыком и марсианскими приправами",
      orderDate: "13:15",
      ingredients: [
        {
          _id: "60666c42cc7b410027a1a9b1",
          name: "Краторная булка N-200i",
          type: "bun",
          proteins: 80,
          fat: 24,
          carbohydrates: 53,
          calories: 420,
          price: 1255,
          image: "https://code.s3.yandex.net/react/code/bun-02.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
          __v: 0,
        },
        {
          _id: "60666c42cc7b410027a1a9b5",
          name: "Говяжий метеорит (отбивная)",
          type: "main",
          proteins: 800,
          fat: 800,
          carbohydrates: 300,
          calories: 2674,
          price: 3000,
          image: "https://code.s3.yandex.net/react/code/meat-04.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
          image_large:
            "https://code.s3.yandex.net/react/code/meat-04-large.png",
          __v: 0,
        },
        {
          _id: "60666c42cc7b410027a1a9b6",
          name: "Биокотлета из марсианской Магнолии",
          type: "main",
          proteins: 420,
          fat: 142,
          carbohydrates: 242,
          calories: 4242,
          price: 424,
          image: "https://code.s3.yandex.net/react/code/meat-01.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
          image_large:
            "https://code.s3.yandex.net/react/code/meat-01-large.png",
          __v: 0,
        },
      ],
      orderPrice: 229,
    },

    {
      _id: "d2768cfa-90f0-4556-b9d0-fd4bf12480b2",
      orderNumber: "008473",
      orderTitle: "Бургер Звездные Времена",
      orderDate: "17:05",
      ingredients: [
        {
          _id: "60666c42cc7b410027a1a9b1",
          name: "Краторная булка N-200i",
          type: "bun",
          proteins: 80,
          fat: 24,
          carbohydrates: 53,
          calories: 420,
          price: 1255,
          image: "https://code.s3.yandex.net/react/code/bun-02.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
          __v: 0,
        },
        {
          _id: "60666c42cc7b410027a1a9b5",
          name: "Говяжий метеорит (отбивная)",
          type: "main",
          proteins: 800,
          fat: 800,
          carbohydrates: 300,
          calories: 2674,
          price: 3000,
          image: "https://code.s3.yandex.net/react/code/meat-04.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
          image_large:
            "https://code.s3.yandex.net/react/code/meat-04-large.png",
          __v: 0,
        },
        {
          _id: "60666c42cc7b410027a1a9b6",
          name: "Биокотлета из марсианской Магнолии",
          type: "main",
          proteins: 420,
          fat: 142,
          carbohydrates: 242,
          calories: 4242,
          price: 424,
          image: "https://code.s3.yandex.net/react/code/meat-01.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
          image_large:
            "https://code.s3.yandex.net/react/code/meat-01-large.png",
          __v: 0,
        },
      ],
      orderPrice: 430,
    },
  ],
  currentOrder : {
    _id: "",
    orderNumber: "",
    orderTitle: "",
    orderDate: "",
    ingredients: [],
    orderPrice: "",
  },

}
  
  

export const ordersReducer = (state = initialState, action) => {

      return state;
  }

export default ordersReducer;
