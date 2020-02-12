import IClotheItem from '../models/IClotheItem';

export default class ClothesApiClient {
  getClothes(): IClotheItem[] {
    // fake api call...
    return [
      { id: 1, description: 'A lovely t-shirt', isFavorited: false },
      { id: 2, description: 'A lovely blouse', isFavorited: false },
      { id: 3, description: 'A lovely dress', isFavorited: false },
      { id: 4, description: 'A lovely suit', isFavorited: false },
      { id: 5, description: 'An awesome pair of shoes', isFavorited: false },
      { id: 6, description: 'An awesome belt', isFavorited: false }
    ];
  }
}
