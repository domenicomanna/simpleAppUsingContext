import React, { useContext } from 'react';
import { ClothesContext } from '../contexts/ClothesContext';
import IClotheItem from '../models/IClotheItem';
import ClotheItem from './ClotheItem';

const ClotheItemsList = () => {
  const context = useContext(ClothesContext);

  return context.isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <ul className='clotheItems'>{transformClotheItems(context.clotheItems)}</ul>
  );
};

function transformClotheItems(clotheItems: IClotheItem[]) {
  return clotheItems.map(c => (
    <ClotheItem key={c.id} id={c.id} description={c.description} isFavorited={c.isFavorited} />
  ));
}

export default ClotheItemsList;
