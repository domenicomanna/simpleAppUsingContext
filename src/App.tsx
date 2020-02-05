import React from 'react';
import './App.css';
import Layout from './components/Layout';
import ClothesContextProvider from './contexts/ClothesContext';
import ClotheItemsList from './components/ClotheItemsList';
import { Switch, Route } from 'react-router-dom';
import FavoritedClotheItemsList from './components/FavoritedClotheItemsList';

const App = () => {
  return (
    <Layout>
      <ClothesContextProvider>
        <Switch>
          <Route path="/" component={ClotheItemsList} exact />
          <Route path="/favorited-clothes" component={FavoritedClotheItemsList}/>
        </Switch>
      </ClothesContextProvider>
    </Layout>
  );
}

export default App;
