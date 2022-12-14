export const alertTimeout = 1500;

export const infoAlertTime = 1000;

export const months = [
  'ינואר',
  'פברואר',
  'מרץ',
  'אפריל',
  'מאי',
  'יוני',
  'יולי',
  'אוגוסט',
  'ספטמבר',
  'אוקטובר',
  'נובמבר',
  'דצמבר',
];

export const dashboardCardsColor = {
  itemsColor: '#a4dfcd',
  totalProductColor: '#623cea',
  weeklyUpdateColor: '#a4dbfe',
  warningsColor: '#ff9f0b',
  electricalItemColor: '#FFA987',
  documentColor: '#004E89',
};

//Should delete on server ready
export const dynamicMockDashboard = {
  itemsCount: 10,
  totalProductCount: 132,
  updatesWeeklyCount: 50,
  warningCount: 10,
  documentsCount: 10,
  isIncrease: true,
  itemsCountPercentage: 0.75,
  totalProductCountPercentage: 0.5,
  updatesWeeklyCountPercentage: 0.25,
  warningCountPercentage: 0.8,
};

export const paginatorConfig = {
  numOfRows: 10,
  rowsPerPageOptions: [10, 25, 50, 100],
  paginatorTemplate:
    'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown',
};
