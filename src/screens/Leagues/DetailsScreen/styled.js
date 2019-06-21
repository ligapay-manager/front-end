import styled from 'styled-components';
import Utils from '../../../theme/utils';


export const HEADER_MAX_HEIGHT = 420;
export const HEADER_MIN_HEIGHT = Utils.APPBAR_HEIGHT;
export const HEADER_HEIGHT = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export const RankingOptions = styled.View`
  height: 56;
  width: null;
  justify-content: space-between;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 10px;
  align-items: center;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #e9e9e9;
`;

export const RankingName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Container = styled.View`
  flex: 1;
`;
