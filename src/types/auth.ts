import { User } from '@/payload-types'

export type AuthContextType = {
  user: User | null
  isAuthenticated: boolean
  setUser: (user: User | null) => void
  logout: () => Promise<void>
}
