import React, { useContext } from 'react';
import { ClothesContext } from '../contexts/ClothesContext';
import clotheItem from '../models/ClotheItem';
import { ClotheItem } from './ClotheItem';

const ClotheItemsList = () => {
  const context = useContext(ClothesContext);

  return context.isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <ul className='clotheItems'>{transformClotheItems(context.clotheItems)}</ul>
  );
};

function transformClotheItems(clotheItems: clotheItem[]) {
  return clotheItems.map(c => (
    <ClotheItem key={c.id} id={c.id} description={c.description} isFavorited={c.isFavorited} />
  ));
}

export default ClotheItemsList;
