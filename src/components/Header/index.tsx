import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, NavItem } from './styles';
import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const { pathname } = useLocation();

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <NavItem className={pathname === '/' ? 'selected' : ''} to="/">
            Listagem
          </NavItem>
          <NavItem
            className={pathname === '/import' ? 'selected' : ''}
            to="/import"
          >
            Importar
          </NavItem>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
