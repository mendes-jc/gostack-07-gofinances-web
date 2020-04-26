import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const NavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  transition: opacity 0.2s;
  cursor: pointer;
  opacity: 0.8;

  & + a {
    margin-left: 32px;
  }

  &:hover {
    opacity: 1;
  }

  &.selected {
    opacity: 1;
    border-bottom: 2px solid #ff872c;
    padding-bottom: 10px;
  }
`;
