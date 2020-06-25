import React from 'react';
import Home from './containers/Home/Home';
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const StyledDiv = styled.div `
    text-align: center;
`;


function App() {
  return (
    <BrowserRouter>
      <StyledDiv>
          <Home />
      </StyledDiv>
    </BrowserRouter>
  );
}

export default App;
