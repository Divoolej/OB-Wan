export const BUTTON_DOWN = 'BUTTON_DOWN'
export const BUTTON_UP = 'BUTTON_UP'

export const keyDown = button => ({
  type: BUTTON_DOWN,
  payload: { button },
})

export const keyUp = button => ({
  type: BUTTON_UP,
  payload: { button },
})
