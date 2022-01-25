import React, { useContext } from 'react'

import SignInRoutes from './SignInRoutes'
import OtherRoutes from './OtherRoutes'
import { UserContext } from '../context/userContext'

function Routes() {
  const { signed } = useContext(UserContext)

  return signed ? <OtherRoutes /> : <SignInRoutes />
}

export default Routes;