import { home } from 'styles'

export const invalidEmail = input => {
  const { newsletter } = home
  input.classList.add(newsletter.invalid)
}

export const resetEmail = input => {
  const { newsletter } = home
  input.classList.remove(newsletter.invalid)
}
