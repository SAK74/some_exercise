import styled from 'styled-components';
export const Button = styled.button`
  //background-color: ${({background}) => background};
  position: relative;
  // top: -26px; 
  padding: 0 14px;
  background-color: transparent;
  color: #a4a4a4;
  font-size: 16px;
  border: thin solid #dbdbdb;
  border-radius: 4px;
  height: 35px;
  top: ${({top}) => top ? top : '-26px'};
`;
export const IOS = styled(Button)`
  top: -5px;
  left: -1px;
  padding-right: 10px;
`;
export const Android = styled(Button)`
  top: -3px;
  left: 9px;
  padding-right: 11px;
`;