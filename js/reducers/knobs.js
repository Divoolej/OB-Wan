const knobs = (state = {}, action) => {
  switch (action.type) {
    case 'KNOB_TEST':
      return {}
    default:
      return state
  }
}

export default knobs
