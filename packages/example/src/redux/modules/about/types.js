// @flow

// STATE
export type State = {
  text: string
}

// CONSTANTS
export type UpdateTextConstant = 'UPDATE_TEXT'

// ACTIONS
export type UpdateTextAction = { type: UpdateTextConstant, text: string }
export type Action = UpdateTextAction

// ACTION CREATORS
export type UpdateText = (text: string) => UpdateTextAction
