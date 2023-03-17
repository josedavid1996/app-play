import create from 'zustand'
import { User } from '../../interface'

interface AuthStore {
  user: User
  isAuth: boolean
  isAdmin: boolean
  loginAction: (user: User) => void
  logoutAction: () => void
}

const userInitialState = {
  username: '',
  email: '',
  role: ''
}

export const useAuth = create<AuthStore>((set) => ({
  user: { username: '', email: '', role: '' },
  isAuth: false,
  isAdmin: false,
  logoutAction: () => {
    set({ user: userInitialState, isAuth: false, isAdmin: false })
  },
  loginAction: (user) => {
    set({ user, isAuth: true, isAdmin: true })
  }
}))
