import React, { useContext } from 'react';
import { ClothesContext } from '../contexts/ClothesContext';
import IClotheItem from '../models/IClotheItem';
import ClotheItem  from './ClotheItem';

const FavoritedClotheItemsList = () => {
  const context = useContext(ClothesContext);
  const favoritedClotheItems = context.clotheItems.filter(c => c.isFavorited);
    
  return favoritedClotheItems.length === 0 ? (
    <h1>You have no favorited clothes :(</h1>
  ) : (
    <ul className='clotheItems'>{transformClotheItems(favoritedClotheItems)}</ul>
  );
};

function transformClotheItems(clotheItems: IClotheItem[]) {
  return clotheItems.map(c => (
    <ClotheItem key={c.id} id={c.id} description={c.description} isFavorited={c.isFavorited} />
  ));
}

export default FavoritedClotheItemsList;
