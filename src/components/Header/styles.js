import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: #f0f0f0;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoxAside = styled.div`
    justify-content: center;
    flex-wrap: wrap;
    background: white;
    position: absolute;
    top: 0;
    right: ${props => (props.active ? 0 : '-400px')};
    height: 100%;
    display: flex;
    flex: 1;
    width: 300px;
    transition: 0.7s;
    z-index: 1;
`;