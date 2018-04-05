import { invalidEmail, resetEmail } from './inputStatus'

/**
 * If email is not correct then cry
 * @param {HTMLElement} input
 */
export const parseInput = input => {
  const wrapper = input.parentElement
  if (!validEmail(input)) invalidEmail(wrapper)
}

/**
 * Check for valid Email
 * @param {HTMLElement} input
 */
export const validEmail = input => {
  const value = input.value
  const valid = input.validity.valid
  if (!value) return true
  return valid
}

/**
 * Reset the email message situation
 * @param {HTMLElement} input
 */
export const resetInput = input => {
  const wrapper = input.parentElement
  resetEmail(wrapper)
}
