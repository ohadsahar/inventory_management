export interface ProductProps {
  id: string;
  name: string;
  numOfUnits: number;
  minimumForAlert: number;
  productHistory: ProductHistoryProps[];
  onEdit?: (id: string) => void;
  onFinished?: (value: string) => void;
  onDelete?: (value: string) => void;
}

interface ProductHistoryProps {
  id: string;
  name: string;
  numOfUnits: number;
  minimumForAlert: number;
}