export const addToCart = product => {
  return {
    type: '@cart/Add',
    product
  }
}

export const removeFromCart = id => {
  return {
    type: '@cart/Remove',
    id
  }
}

export const updateAmount = (id, amount) => {
  return {
    type: '@cart/Update',
    id,
    amount
  }
}
