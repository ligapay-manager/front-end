import React from 'react';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import styled from 'styled-components';


const Category = styled.View`
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

const CategoryName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const CategoryAction = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: null;
`;

const CategoryActionName = styled.Text`
  font-size: 16px;
  margin-right: 5px;
`;

const HeaderCategoryLeague = (props) => {
  const { name, actionName } = props;
  return (
    <Category>
      <CategoryName>{name}</CategoryName>
      <CategoryAction>
        <CategoryActionName>{actionName}</CategoryActionName>
        <IconSimple name="arrow-right" size={15} />
      </CategoryAction>
    </Category>
  );
};

export default HeaderCategoryLeague;
