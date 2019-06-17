import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styled from 'styled-components';
import Utils from './utils';


export const CardInfo = styled.View`
  background-color: #ffffff;
  elevation: 5px;
  shadow-radius: 10px;
  padding: 5px;
  margin-vertical: ${Utils.relativeWidth(4)};
  margin-horizontal: ${Utils.relativeWidth(5)};
  justify-content: center;
  height: ${Utils.relativeHeight(20)};
  width: ${Utils.relativeWidth(90)};
`;

export const CardTitle = styled.Text`
  font-size: ${Utils.fontNormal};
  font-weight: bold;
  text-align: center;
  overflow: hidden;
`;

export const CardAwards = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const CardImage = styled.Image`
  height: ${Utils.relativeHeight(18)};
  width: ${Utils.relativeWidth(37)};
`;

export const AwardText = styled.Text`
  font-size: 14px;
`;

export const ButtonShowMore = styled.TouchableOpacity`
  align-self: flex-end;
  justify-content: center;
  display: flex;
  padding: 3px 7px;
  border-radius: 10px;
  border: 1px solid #000;
  align-items: center;
  margin-bottom: ${Utils.relativeWidth(2)};
`;

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
          <CardInfo>
            <CardAwards>
              <CardImage
                // eslint-disable-next-line global-require
                source={require('./trofeu.png')}
              />
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
          </CardInfo>
        </ScrollView>
      </View>
    );
  }
}
