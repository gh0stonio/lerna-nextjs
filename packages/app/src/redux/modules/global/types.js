// @flow

// STATE
export type State = {
  foo: string
}

// CONSTANTS
export type UpdateFooConstant = 'UPDATE_FOO'

// ACTIONS
export type UpdateFooAction = { type: UpdateFooConstant, foo: string }
export type Action = UpdateFooAction

// ACTION CREATORS
export type UpdateFoo = (foo: string) => UpdateFooAction
