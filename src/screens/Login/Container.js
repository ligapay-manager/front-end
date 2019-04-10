import styled from 'styled-components/native';


const Container = styled.View`
  display: flex;
  background-color: ${props => props.theme.colors.lightGreen};
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default Container;
