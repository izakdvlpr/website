import styled from 'styled-components';

export const Container = styled.nav`
  padding: 15px;
  width: 100%;
  background: var(--js-primary);
`;

export const Logo = styled.label`
  font-size: 55px;
  line-height: 80px;
  padding: 0 40px 0 100px;
  font-weight: 700;
`;

export const Nav = styled.ul`
  float: right;
  margin-right: 50px;

  a {
    padding: 10px;
    margin: 0px 10px 0px 10px;
    font-size: 17px;
    text-transform: uppercase;
    border-radius: 3px;
    color: #000000;
    background: var(--js-secondary);
  }

  a:hover {
    background: #000000;
    color: #ffffff;
    transition: 0.5s;
  }
`;

export const Item = styled.li`
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;
`;
