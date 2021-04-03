import { createStore, bindActionCreators } from 'redux'

import reducer from './reducer'
import * as actions from './actions'


const store = new createStore(reducer)


//dispatch не теряет this, всегда обращается к store
const { dispatch } = store

//примерно так работает bindActionCreators
// const bindActionCreators = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args))
// }

// const incDispatch = () => bindActionCreators(inc, dispatch)
// const decDispatch = () => bindActionCreators(dec, dispatch)
// const rndDispatch = () => bindActionCreators(rnd, dispatch)


const { inc, dec, rnd } = bindActionCreators(actions, dispatch)
//inc = (...args) => {
//   dispatch(creator(...args))

const update = () => {
  document.getElementById('counter').innerHTML = store.getState()
}

store.subscribe(update)

// store.dispatch({ type: 'INC' })

// document.getElementById('inc')
//   .addEventListener('click', () => {
//     // store.dispatch({ type: 'INC' })
//     store.dispatch(inc())
//   })

document.getElementById('inc')
  .addEventListener('click', inc)

document.getElementById('dec')
  .addEventListener('click', dec)

document.getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 10)
    rnd(payload)
  })
