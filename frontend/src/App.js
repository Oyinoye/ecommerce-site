import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="/">amazona</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign in</a>
            </div>
        </header>
        <main>
          <Route path='/product/:id' component={ProductScreen}></Route>
          <Route exact path='/' component={HomeScreen}></Route>
            
    
        </main>
        <footer>
            <p className="row center">All rights reserved</p>
        </footer>
    </div>
    </BrowserRouter>  
  );
}

export default App;