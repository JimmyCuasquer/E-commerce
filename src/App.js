import React, {lazy, Suspense} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//importamos context
import { ProductLisProvider } from './context/ProductListContext';
import { ShopCartProvider } from './context/ShopCartContext';

import LoaderPage from './components/Custom/LoaderPage';
import Main from './layouts/Main';
import Pagos from './views/Pagos/Pagos';
//lazy
const Home = lazy(() => import('./views/Home/Home'))
const Tienda = lazy(() => import('./views/Tienda/Tienda'))


function App() {
  return (
    <>
    <ProductLisProvider>
      <ShopCartProvider>
      <BrowserRouter>
      <Main>
        <Switch>
          <Route path="/" exact>
            <Suspense fallback={<LoaderPage/>}>
            <Home/>
            </Suspense>
          </Route>
          <Route path="/Shopping" exact>
            <Suspense fallback={<LoaderPage/>}>
            <Tienda/>
            </Suspense>
          </Route>  
        <Route path="/Pagos" exact>
            <Suspense fallback={<LoaderPage/>}>
            <Pagos/>
            </Suspense>
          </Route> 
          </Switch>
        </Main>
      </BrowserRouter>
      </ShopCartProvider>
    </ProductLisProvider>
    </>
    );
}

export default App;
