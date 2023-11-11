import styled from 'styled-components/native';
import { constants } from './utils/constants';
import HomeScreen from './screens/Home';

const StyledText = styled.Text`
  font-size: 20px;
  margin-top: 40px;
  color: ${constants.colors.secondary};
`;

export default function App() {
  return (
    <HomeScreen />
  );
}