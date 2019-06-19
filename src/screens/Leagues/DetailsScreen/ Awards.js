import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import Utils from '../../../theme/utils';


const Trophy = require('./trofeu.png');


const CardTitle = styled.Text`
  font-size: ${Utils.fontNormal};
  font-weight: bold;
  text-align: center;
  overflow: hidden;
`;

const CardAwards = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const CardImage = styled.Image`
  height: ${Utils.relativeHeight(18)};
  width: ${Utils.relativeWidth(34)};
`;

const AwardText = styled.Text`
  font-size: 14px;
`;

const ButtonShowMore = styled.TouchableOpacity`
  align-self: flex-end;
  justify-content: center;
  display: flex;
  padding: 3px 7px;
  border-radius: 10px;
  border: 1px solid #000;
  align-items: center;
  margin-bottom: ${Utils.relativeWidth(2)};
`;

export default class Awards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CardAwards>
        <CardImage source={Trophy} />
        <View style={{ marginTop: 10 }}>
          <View style={{ alignItems: 'center', marginLeft: 10, flex: 1 }}>
            <CardTitle>Premiações</CardTitle>
            <AwardText>Primeiro lugar - RS 10000,00</AwardText>
            <AwardText>Segundo lugar - RS 1000,00</AwardText>
            <AwardText>Terceiro lugar - RS 100,00</AwardText>
          </View>
          <ButtonShowMore>
            <Text style={{ fontSize: 12 }}>Ver mais</Text>
          </ButtonShowMore>
        </View>
      </CardAwards>
    );
  }
}
