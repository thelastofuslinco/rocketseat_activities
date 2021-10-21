import produce from 'immer'

export default function cart (state = [], action) {
  switch (action.type) {
    case '@cart/Add_Success':
      return produce(state, draft => {
        const { product } = action
        draft.push(product)
      })
    case '@cart/Remove':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id)
        if (productIndex >= 0) {
          draft.splice(productIndex, 1)
        }
      })
    case '@cart/Update_Amount_Success': {
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id)
        if (productIndex >= 0) {
          draft[productIndex].amount = action.amount
        }
      })
    }
    default:
      return state
  }
}
