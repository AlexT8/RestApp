import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { constants } from '../utils/constants';

export const ScreenContainer = styled.View`
    flex: 1;
    align-items: center;
    padding-top: ${Constants.statusBarHeight+20};
    background: ${constants.colors.background};
`;