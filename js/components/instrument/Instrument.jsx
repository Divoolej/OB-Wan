import React from 'react'
import PropTypes from 'prop-types'

import InstrumentHeader from './InstrumentHeader.jsx'
import Synth from './Synth.jsx'

const InstrumentComponent = ({ type }) => {
  const renderSynthesizer = () => {
    switch (type) {
      case 'Synth':
        return <Synth />
    }
  }

  return(
    <div className="Instrument">
      <InstrumentHeader />
      {renderSynthesizer()}
    </div>
  )
}

InstrumentComponent.propTypes = {

}

import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  type: state.rack.instrument.type,
})

const actions = {}

const InstrumentContainer = connect(mapStateToProps, actions)(InstrumentComponent)

export default InstrumentContainer
