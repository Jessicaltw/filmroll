import * as React from "react";
import {  BrowserRouter, Route, Routes} from 'react-router-dom';
import Account from './components/Account';
import FilmRolls from './components/FilmRolls';
import Home from './components/Home';
import Menu from "./components/Menu";
import Review from './components/Review';
import Search from './components/Search';
import Roll from './components/Roll';
import AddReview from './components/AddReview';
import Login from './components/Login';
import {Box} from '@mui/material';
import {Stack} from '@mui/material';
import ButtonAppBar from './components/ButtonAppBar';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { Counter } from "./components/Counter";
import Sync from "./components/Sync";



function App() {
  return (
    <Box sx={{backgroundColor: 'white' , color:'white', textAlign: 'center', marginTop: 0, margin: 0, padding: 0 }}>

      <Stack direction="row" justifyContent="center" mt={0}>
    <div className="App">
    <Provider store={store}>
      <ButtonAppBar /> 
      <BrowserRouter sx={{ margin: 0, position:'fixed', bottom:0 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/review" element={<Review />} />
          <Route exact path="/filmrolls" element={<FilmRolls />} />
          <Route exact path="/account" element={<Account/>} />
          <Route exact path="/roll" element={<Roll/>} />
          <Route exact path="/addreview" element={<AddReview/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/search" element={<Search/>} />
          
        </Routes>
    
        <Menu />
   
      </BrowserRouter>
      <Sync/>
      </Provider>
    </div>
   
    </Stack>
    </Box>
  );
}

export default App;

