import React from 'react';
import styled from 'styled-components';
import Leaderboard from './Leaderboard';

const AppContainer = styled.div`
  text-align: center;
`;

function App() {
  return (
    <AppContainer>
      <Leaderboard />
    </AppContainer>
  );
}
// make the app component available for import
export default App;
