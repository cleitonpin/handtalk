import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { toast } from 'react-toastify'

import { Container, Box, Input, SigninButton } from './style';

function LoginForm({ signup }) {

  const history = useHistory();
  const { logar, create } = useContext(UserContext)
  const [identifier, setIdentifier] = useState('')
  const [pass, setPass] = useState('') 

  console.log("criar? ", signup)
  
  const handleLogin = async () => {
    if (identifier && pass) {

      try {

        if (signup) {
          const data = await create({
            id: 1,
            name: 'Harry',
            email: identifier,
            password: pass,
            role: 'admin'
          })

          console.log(data)
        } else {
          await logar(identifier, pass)
        }
        
        history.push('/home')
      } catch (error) {
        toast.error(error)
      }
    }
  }

  return <Container>
    <Box>
      <Input
        value={identifier}
        onChange={e => setIdentifier(e.target.value)}
        placeholder='Email / Usuário'
      />

      <Input
        type="password"
        value={pass}
        onChange={e => setPass(e.target.value)}
        placeholder='Senha'
      />

      <SigninButton onClick={handleLogin} disabled={signup}>
        {!signup ? 'Entrar' : 'Cadastrar'}
      </SigninButton>
    </Box>
  </Container>;
}

export default LoginForm;