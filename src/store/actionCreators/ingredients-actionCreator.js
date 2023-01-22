import {getIngredientsData} from "../../utils/burger-api";

function getIngredientsActionCreator() {
      return function (dispatch) {
        dispatch({
          type: "GET_INGREDIENTS",
        });
        getIngredientsData()
        .then (res => {
          if (res){
            dispatch({
              type: "GET_INGREDIENTS_SUCCESS",
              ingredients: res.data,
            });
          }else {
            dispatch({
              type:"GET_INGREDIENTS_FAILED"
            })
          }
        })

      }
    }


export default getIngredientsActionCreator;