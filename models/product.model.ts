export interface ProductProps {
  id: string;
  name: string;
  numOfUnits: number;
  minimumForAlert: number;
  productHistory?: ProductHistoryProps[];
  productStatus: ProductStatus;
  onEdit?: (id: string) => void;
  onFinished?: (value: string) => void;
  onDelete?: (value: string) => void;
}

export interface ProductHistoryProps {
  id: string;
  updateName: string;
  numOfUnits: number;
  minimumForAlert: number;
  updateTime: Date;
  productStatus: ProductStatus;
}

interface ProductStatus {
  label: string;
  labelValue: string;
}
