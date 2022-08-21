export interface ItemProps {
  id: string;
  name: string;
  numOfUnits: number;
  minimumForAlert: number;
  onEdit?: (id: string) => void;
  onFinished?: (value: string) => void;
  onDelete?: (value: string) => void;
}
