export const isServer = () => typeof window === 'undefined'

export const isEmpty = (v?: string) => v?.trim().length === 0

export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms))

export const classNames = (cln: Array<string | undefined>) => {
  return cln.join(' ').trim()
}

export const isEmail = (email?: string) => {
  const regEmail = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi
  return regEmail.test(email ?? '')
}
