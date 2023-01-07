export function modalActionCreator(modalIngredient,state) {

  return {
    type: "ACTIVE_MODAL_INGREDIENT",
    value: modalIngredient,
    state: state
  };
}


export function closeModalActionCreator(state) {
  return{
    type: "CLOSE_MODAL",
    state:state
  }
}

export function escCloseModalActionCreator(state) {
  return {
    type: "ESC_CLOSE_MODAL",
    state:state
  };
}

export function overlayModalClickActionCreator(state) {
  return {
    type: "OVERLAY_MODAL_CLICK",
    state: state
  }
  
}