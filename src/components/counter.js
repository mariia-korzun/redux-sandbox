import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div className="text-center mt-5">
            <h2>{counter}</h2>
            <button
                className="btn btn-primary btn-lg"
                onClick={dec} >DEC</button>
            <button
                className="btn btn-primary btn-lg"
                onClick={inc} >INC</button>
            <button
                className="btn btn-primary btn-lg"
                onClick={rnd} >RND</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

// const mapDispatchToProps = (dispatch) => {
// const { inc, dec, rnd } = bindActionCreators(actions, dispatch)
// return {
//     inc,
//     dec,
//     rnd: () => {
//         const payload = Math.floor(Math.random() * 10)
//         rnd(payload)
//     }
// }
// }

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}


// export default connect(mapStateToProps, mapDispatchToProps)(Counter)

//можно передавать просто обьект actions, connect обернет их в диспатч
export default connect(mapStateToProps, actions)(Counter)