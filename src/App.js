import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom';
import CarRouteConfiguration from './cars_store/CarRouteConfiguration';
import { createContext } from 'react';
import CarNavigation from './cars_store/carNavigation';
import { createStore } from 'redux';
import allReducers from './redux/reducers';
import { Provider } from 'react-redux';
import Login from './redux/components/Login';
import { Home } from './components/Home';
import Transction from './redux/components/Transaction';




export const ThemeContext=createContext('blue')
export const NameContext=createContext("Alice")

const store = createStore(allReducers)

function App() {

  return ( <> 
<Provider store={store}>
<Login />
<Home />

<Transction />
</Provider>
 
   
    </>
    
   
  );
}

export default App ;


/*
<BrowserRouter>
 <CarNavigation />
 <CarRouteConfiguration />
 
 </BrowserRouter>
 */

{/* <ThemeContext.Provider  value="orange" >
    <NameContext.Provider value="Bob"> 
      <ComponentA />
  
  </NameContext.Provider>
 </ThemeContext.Provider>

 <ComponentD /> */}
