import React from 'react'

import { connect } from 'react-redux'
import { toggleDark } from './actions'

function GrandChild(props){
  return <div>I'M A GRANDCHILD
    <button onClick={props.toggleDark}>Dark mode</button>
  </div>
}

export default connect(null, { toggleDark })(GrandChild)