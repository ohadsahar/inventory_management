import { ProductStatusType } from '@/config/Enums/ProductStatusType';

export interface ProductProps {
  id: number;
  name: string;
  numOfUnits: number;
  minimumForAlert: number;
  productHistory?: ProductHistoryProps[];
  productStatus: ProductStatusType;
  onEdit?: (id: string) => void;
  onFinished?: (value: string) => void;
  onDelete?: (value: string) => void;
}

export interface ProductHistoryProps {
  id: number;
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
