import React, { createContext, useEffect, useState, FunctionComponent } from 'react';
import IClotheItem from '../models/IClotheItem';
import ClothesApiClient from '../api/ClothesApiClient';

const clothesApiClient = new ClothesApiClient();

interface IClothesContext {
  clotheItems: IClotheItem[];
  isLoading: boolean;
  toggleFavorite: (id: number) => void;
}

export const ClothesContext = createContext<IClothesContext>({} as IClothesContext)

const ClothesContextProvider:FunctionComponent = ({children}) => {
  const [clotheItems, setClotheItems] = useState<IClotheItem[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let clotheItems = clothesApiClient.getClothes();
    setClotheItems(clotheItems);
    setLoading(false);
  }, []);

  function toggleFavorite(id: number) {
    let updatedClotheItems = clotheItems.map(c => c.id === id ? { ...c, isFavorited: !c.isFavorited } : c);
    setClotheItems(updatedClotheItems);
  }

  return (
    <ClothesContext.Provider
      value={{ clotheItems: clotheItems, toggleFavorite: toggleFavorite, isLoading: isLoading}}>
        {children}
    </ClothesContext.Provider>
  );
};

export default ClothesContextProvider;
