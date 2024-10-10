import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;
export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

type NavLinkProps = {
  as?: keyof JSX.IntrinsicElements; // Allow `as` prop to switch to other elements
  to?: string; // Optional because it's not required when using `as="span"`
};

export const NavLink = styled(Link)<NavLinkProps>`
  padding: 10px 15px;
  cursor: pointer;
`;
