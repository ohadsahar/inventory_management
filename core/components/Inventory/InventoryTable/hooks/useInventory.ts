import { items } from 'items';
import { ItemProps } from 'models/item.model';
import { useState, useRef, useEffect, useCallback } from 'react';

const productHistory = [
  {
    id: '1',
    updateName: 'נוי',
    numOfUnits: '7',
    minimumForAlert: '5',
    productStatus: { label: 'outofstock', labelValue: 'במלאי' },
    date: new Date(),
  },
  {
    id: '2',
    updateName: 'נוי',
    numOfUnits: '7',
    minimumForAlert: '5',
    productStatus: { label: 'stock', labelValue: 'במלאי' },
    date: new Date(),
  },
];

export const useInventory = () => {
  const [products, setProducts] = useState<ItemProps[]>([]);
  const [expandedRows, setExpandedRows] = useState<any>();
  const [deleteProductsDialog, setDeleteProductsDialog] = useState<boolean>(false);
  const toast = useRef<any>(null);
  const [selectedProducts, setSelectedProducts] = useState(null);

  useEffect(() => {
    setProducts(items);
  }, []);

  const onRowExpand = useCallback((event: any) => {
    console.log(event);
  }, []);

  const onRowCollapse = useCallback((event: any) => {
    console.log(event);
  }, []);

  const confirmDeleteSelected = () => {
    setDeleteProductsDialog(true);
  };

  const importCSV = (e: any) => {};

  return {
    products,
    toast,
    expandedRows,
    productHistory,
    deleteProductsDialog,
    selectedProducts,
    setSelectedProducts,
    setExpandedRows,
    onRowExpand,
    onRowCollapse,
    importCSV,
  };
};
