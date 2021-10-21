import { all } from '@redux-saga/core/effects'
import cart from './cart/sagas'

export default function * rootSaga () {
  return yield all({ cart })
}
