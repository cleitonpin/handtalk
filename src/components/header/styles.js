import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 100;
`

export const HeaderContent = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`

export const HeaderLogo = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100px;
  max-height: 100px;
  padding: 10px;

  @media (max-width: 768px) {
    max-width: 50px;
    max-height: 50px;
  }
`

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`

export const To = styled(Link)`
  color: #000;
  font-size: 20px;
  text-decoration: none;

  &:hover {
    color: #042004;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export const HeaderProfile = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  padding: 0 20px;
`

export const Profile = styled.div`

  display: flex;
  align-items: center;
`

export const Avatar = styled.img`

  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #eee;
  margin-right: 10px;
`

export const ProfileInfo = styled.div`

  display: flex;
  flex-direction: column;
`

export const ProfileName = styled.strong`

  font-size: 14px;
  color: #000;
  margin-bottom: 2px;
`

export const ProfileAccount = styled.span`

  font-size: 12px;
  color: #666;
`