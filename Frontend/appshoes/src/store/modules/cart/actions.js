export const addToCartRequest = id => {
  return {
    type: '@cart/Add_Request',
    id
  }
}

export const addToCartSuccess = product => {
  return {
    type: '@cart/Add_Success',
    product
  }
}

export const removeFromCart = id => {
  return {
    type: '@cart/Remove',
    id
  }
}

export const updateAmountRequest = (id, amount) => {
  return {
    type: '@cart/Update_Amount_Request',
    id,
    amount
  }
}

export const updateAmountSuccess = (id, amount) => {
  return {
    type: '@cart/Update_Amount_Success',
    id,
    amount
  }
}
