import { createContext, useEffect, useState } from 'react'
import { api } from '../service/api'

export const UserContext = createContext({})

function ContextProvider({ children }) {
  const [user, setUser] = useState()

  useEffect(() => {
    const storageUser = localStorage.getItem('@App:user')
    const storageToken = localStorage.getItem('@App:token')

    if (storageUser && storageToken) {
      setUser(JSON.parse(storageUser))
      api.defaults.headers.Authorization = `Bearer ${storageToken}`
    }

  }, [user])

  function logout() {
    localStorage.removeItem('@App:user')
    localStorage.removeItem('@App:token')
    setUser(null)
  }

  async function logar(email, password) {
    const { data } = await api.post('/login', { email, password })
    setUser(data)
    api.defaults.headers.Authorization = `Bearer ${data.customToken}`

    localStorage.setItem('@App:user', JSON.stringify(data))
    localStorage.setItem('@App:token', data.customToken)
  }

  async function create(user) {
    const { data } = await api.post('/signup', user)
    console.log("crfiando")
    // setUser(data)
    // api.defaults.headers.Authorization = `Bearer ${data.customToken}`

    // localStorage.setItem('@App:user', JSON.stringify(data))
    // localStorage.setItem('@App:token', data.customToken)

    return data;
  }

  return (
    <UserContext.Provider value={{ 
      user,
      logar,
      logout,
      create,
      signed: Boolean(user)
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default ContextProvider