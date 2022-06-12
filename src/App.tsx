import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Main from './pages/main';
import styled from 'styled-components';

const AppBlock = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`

function App() {


  return (
    <AppBlock className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </AppBlock>
  );
}

export default App;
