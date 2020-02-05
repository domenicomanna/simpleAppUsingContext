import React, { useContext } from 'react';
import { ClothesContext } from '../contexts/ClothesContext';
import clotheItem from '../models/ClotheItem';
import { ClotheItem } from './ClotheItem';

const FavoritedClotheItemsList = () => {
  const context = useContext(ClothesContext);
  const favoritedClotheItems = context.clotheItems.filter(c => c.isFavorited);
    
  return favoritedClotheItems.length === 0 ? (
    <h1>You have no favorited clothes :(</h1>
  ) : (
    <ul className='clotheItems'>{transformClotheItems(favoritedClotheItems)}</ul>
  );
};

function transformClotheItems(clotheItems: clotheItem[]) {
  return clotheItems.map(c => (
    <ClotheItem key={c.id} id={c.id} description={c.description} isFavorited={c.isFavorited} />
  ));
}

export default FavoritedClotheItemsList;
