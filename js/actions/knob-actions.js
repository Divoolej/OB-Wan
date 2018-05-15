export const MOD = 'MOD'
export const CHANGE_VOLUME = 'CHANGE_VOLUME'

export const modulate = delta => ({
  type: MOD,
  payload: { delta },
})

export const changeVolume = volume => ({
  type: CHANGE_VOLUME,
  payload: { volume }
})
