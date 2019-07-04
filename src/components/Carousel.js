import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';
import Utils from '../theme/utils';


const CarouselContainer = styled.View`
  background-color: #ffffff;
  elevation: 5px;
  shadow-radius: 10px;
  padding: 5px;
  margin-vertical: ${Utils.relativeWidth(4)};
  margin-left: ${Utils.relativeWidth(3)};
  margin-right: ${Utils.relativeWidth(3)};

  justify-content: center;
  height: ${Utils.relativeHeight(20)};
  width: ${Utils.relativeWidth(85)};
`;

const CarouselComponent = ({ componentContainer }) => (
  <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
    <CarouselContainer>{componentContainer}</CarouselContainer>
    <CarouselContainer>{componentContainer}</CarouselContainer>
  </ScrollView>
);

export default CarouselComponent;
