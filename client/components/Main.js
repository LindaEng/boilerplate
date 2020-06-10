import React from 'react'
import { connect } from 'react-redux'

const Main = (props) => {

  return (
    <div>

      <button >Log In With Google</button>

      <br />

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: this.state.user
  }
}

export default connect(mapStateToProps)(Main)
