import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext';


import { HeaderContainer, HeaderContent, To, List } from './styles'

function Header() {
  const { logout, signed } = useContext(UserContext)
  console.log(signed)

  return (
    <HeaderContainer>
      <HeaderContent>

        <List>
          <To to="https://www.instagram.com/">Publicações</To>
          <To to="https://www.instagram.com/">Postar</To>
          <To to="https://www.instagram.com/">Profile</To>
          <To to="#" onClick={logout}>Sair</To>
          
        </List>
        
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header;