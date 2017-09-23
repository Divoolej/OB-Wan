import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

const InstrumentHeaderComponent = ({ selectedInstrument, availableInstruments, onChangeInstrument }) => (
  <div className="InstrumentHeader">
    <span className="label">Instrument: </span>
    <Select
      options={availableInstruments.map(i => ({ value: i, label: i }))}
      onChange={(option) => onChangeInstrument(option.value)}
      value={selectedInstrument}
      searchable={false}
      clearable={false}
    />
  </div>
)

InstrumentHeaderComponent.propTypes = {
  selectedInstrument: PropTypes.string.isRequired,
  availableInstruments: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangeInstrument: PropTypes.func.isRequired,
}

import { connect } from 'react-redux'
import { changeInstrument } from '../../actions/instrument-actions.js'

const mapStateToProps = (state) => ({
  selectedInstrument: state.rack.instrument.type,
  availableInstruments: state.rack.settings.availableInstruments,
})

const actions = { onChangeInstrument: changeInstrument }

const InstrumentHeaderContainer = connect(mapStateToProps, actions)(InstrumentHeaderComponent)

export default InstrumentHeaderContainer
