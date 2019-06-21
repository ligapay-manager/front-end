import styled from 'styled-components';


export const Container = styled.View`
  flex: 1;
`;

export const TextContainer = styled.View`
  margin-horizontal: 15px;
  margin-bottom: 10px;
`;

export const TextMessage = styled.Text`
  font-size: 15px;
`;

export const Category = styled.View`
  height: 56;
  width: null;
  justify-content: space-between;
  margin-left: 15px;
  margin-right: 15px;
  align-items: center;
  flex-direction: row;
  border-top-width: 1px;
  border-top-color: #e9e9e9;
`;

export const CategoryName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
