interface ICategory {
  id: number;
  name: string
}

export const categoriesToPreLoad: ICategory[] = [
  { id: 1,name: 'Smartphones' },
  { id: 2,name: 'Laptops' },
  { id: 3,name: 'Tablets' },
  { id: 4,name: 'Headphones' },
  { id: 5,name: 'Cameras' },
  { id: 6,name: 'Printers' },
  { id: 7,name: 'Monitors' },
  { id: 8,name: 'Storage' },
  { id: 9,name: 'Accessories' }
];


export  const getCategoryName = (id: number) => {
    const findCategory = categoriesToPreLoad.filter( item => item.id === id )

    return findCategory[0].name
}