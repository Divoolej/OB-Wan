import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

const InstrumentHeaderComponent = ({ enabled, selectedInstrument, availableInstruments, onToggleEnabled, onChangeInstrument }) => (
  <div className="InstrumentHeader">
    <div>
      <button
        className={`button ${enabled ? 'disable-button' : 'enable-button'}`}
        onClick={onToggleEnabled}>
      </button>
    </div>
    <div className="row">
      <span className="label">Instrument: </span>
      <Select
        options={availableInstruments.map(i => ({ value: i, label: i }))}
        onChange={ (option) => onChangeInstrument(option.value) }
        value={selectedInstrument}
        searchable={false}
        clearable={false}
      />
    </div>
  </div>
)

InstrumentHeaderComponent.propTypes = {
  enabled: PropTypes.bool.isRequired,
  selectedInstrument: PropTypes.string.isRequired,
  availableInstruments: PropTypes.arrayOf(PropTypes.string).isRequired,
  onToggleEnabled: PropTypes.func.isRequired,
  onChangeInstrument: PropTypes.func.isRequired,
}

import { connect } from 'react-redux'
import { toggleInstrumentEnabled, changeInstrument } from '../../actions/instrument-actions.js'

const mapStateToProps = (state) => ({
  enabled: state.rack.instrument.enabled,
  selectedInstrument: state.rack.instrument.type,
  availableInstruments: state.rack.settings.availableInstruments,
})

const actions = { onToggleEnabled: toggleInstrumentEnabled, onChangeInstrument: changeInstrument }

const InstrumentHeaderContainer = connect(mapStateToProps, actions)(InstrumentHeaderComponent)

export default InstrumentHeaderContainer
