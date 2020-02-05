import React, { FunctionComponent, useContext } from 'react';
import { ClothesContext } from '../contexts/ClothesContext';

interface IProps {
  id: number;
  description: string;
  isFavorited: boolean;
}

export const ClotheItem: FunctionComponent<IProps> = ({ id, description, isFavorited }) => {
  const clothesContext = useContext(ClothesContext);
  return (
    <li className='clotheItem'>
      <p>{description}</p>
      <button onClick={() => clothesContext.toggleFavorite(id)} className='favorite-clothe-item-button'>
        {isFavorited ? 'Unfavorite' : 'Favorite'}
      </button>
    </li>
  );
};
