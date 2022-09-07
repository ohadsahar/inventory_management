export const items = [
  {
    id: '1',
    numOfUnits: 1,
    minimumForAlert: 4,
    name: 'דייסה',
    productStatus: { label: 'lowstock', labelValue: 'אזהרה' },
    productHistory: [
      {
        id: '1',
        updateName: 'אוהד',
        numOfUnits: '7',
        minimumForAlert: '5',
        productStatus: { label: 'stock', labelValue: 'במלאי' },
        updateTime: Date.now(),
      },
      {
        id: '2',
        updateName: 'נוי',
        numOfUnits: '3',
        minimumForAlert: '5',
        productStatus: { label: 'lowstock', labelValue: 'אזהרה' },
        updateTime: Date.now(),
      },
    ],
  },
  {
    id: '2',
    numOfUnits: 6,
    minimumForAlert: 4,
    name: 'אבטיח',
    productStatus: { label: 'stock', labelValue: ' במלאי' },
    productHistory: [
      {
        id: '1',
        updateName: 'נוי',
        numOfUnits: '1',
        minimumForAlert: '5',
        productStatus: { label: 'lowstock', labelValue: 'אזהרה' },
      },
      {
        id: '2',
        updateName: 'נוי',
        numOfUnits: '3',
        minimumForAlert: '5',
        productStatus: { label: 'lowstock', labelValue: 'אזהרה' },
      },
    ],
  },
  {
    id: '3',
    numOfUnits: 0,
    minimumForAlert: 4,
    name: 'במבה',
    productStatus: { label: 'outofstock', labelValue: ' לא במלאי' },
    productHistory: [
      {
        id: '1',
        updateName: 'נוי',
        numOfUnits: '0',
        minimumForAlert: '5',
        productStatus: { label: 'outofstock', labelValue: 'במלאי' },
      },
      {
        id: '2',
        updateName: 'נוי',
        numOfUnits: '0',
        minimumForAlert: '5',
        productStatus: { label: 'outofstock', labelValue: 'אזהרה' },
      },
    ],
  },
  {
    id: '4',
    numOfUnits: 1,
    minimumForAlert: 4,
    name: 'גזר',
    productStatus: { label: 'lowstock', labelValue: 'אזהרה' },
    productHistory: [
      {
        id: '1',
        updateName: 'נוי',
        numOfUnits: '7',
        minimumForAlert: '5',
        productStatus: { label: 'stock', labelValue: 'במלאי' },
      },
      {
        id: '2',
        updateName: 'נוי',
        numOfUnits: '3',
        minimumForAlert: '5',
        productStatus: { label: 'lowstock', labelValue: 'אזהרה' },
      },
    ],
  },

  {
    id: '5',
    numOfUnits: 0,
    minimumForAlert: 4,
    name: 'חלב טבעוני',
    productStatus: { label: 'outofstock', labelValue: 'לא במלאי' },
    productHistory: [
      {
        id: '1',
        updateName: 'נוי',
        numOfUnits: '7',
        minimumForAlert: '5',
        productStatus: { label: 'stock', labelValue: 'במלאי' },
      },
      {
        id: '2',
        updateName: 'נוי',
        numOfUnits: '3',
        minimumForAlert: '5',
        productStatus: { label: 'lowstock', labelValue: 'אזהרה' },
      },
    ],
  },
  {
    id: '6',
    numOfUnits: 3,
    minimumForAlert: 4,
    name: 'חלב טבעוני',
    productStatus: { label: 'lowstock', labelValue: 'אזהרה' },
    productHistory: [
      {
        id: '1',
        updateName: 'נוי',
        numOfUnits: '7',
        minimumForAlert: '5',
        productStatus: { label: 'stock', labelValue: 'במלאי' },
      },
      {
        id: '2',
        updateName: 'נוי',
        numOfUnits: '3',
        minimumForAlert: '5',
        productStatus: { label: 'lowstock', labelValue: 'אזהרה' },
      },
    ],
  },
];

export const dashboardCardsColor = {
  itemsColor: '#a4dfcd',
  totalProductColor: '#623cea',
  weeklyUpdateColor: '#a4dbfe',
  warningsColor: '#ff9f0b',
  electricalItemColor: '#FFA987',
  documentColor: '#004E89',
};
