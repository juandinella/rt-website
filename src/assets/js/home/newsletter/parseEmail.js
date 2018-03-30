import { invalidEmail, resetEmail } from './inputStatus'

/**
 * If email is not correct then cry
 * @param {HTMLElement} input
 */
export const parseInput = input => {
  const wrapper = input.parentElement
  const value = input.value
  const valid = input.validity.valid
  return value && !valid && invalidEmail(wrapper)
}

/**
 * Reset the email message situation
 * @param {HTMLElement} input
 */
export const resetInput = input => {
  const wrapper = input.parentElement
  resetEmail(wrapper)
}
