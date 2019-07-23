import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  function renderSushis() {
    return props.sushis.slice(props.startIndex, props.startIndex + 4).map(sushi => <Sushi key={ sushi.id } sushi={ sushi } addPlate={ props.addPlate } buyWonSoosh={ props.buyWonSoosh } wallet={ props.wallet } />)
  }

  return (
    <Fragment>
      <div className="belt">
        { renderSushis() }
        <MoreButton moreSushi={ props.moreSushi } />
      </div>
    </Fragment>
  )
}

export default SushiContainer
