import { Strings } from "@/config/Strings";
import { TextType } from "@/config/TextType";
import Typography from "@/shared/Typography/Typography";
import { ItemProps } from "models/item.model";
import { FaEdit } from "react-icons/fa";
import { ItemWrapper } from "./Styled";

interface ItemCProps {
  id: string;
  name: string;
  numOfUnits: number;
  minimumForAlert: number;
  onEdit: (item: ItemProps) => void;
}

const Item = ({
  id,
  name,
  numOfUnits,
  minimumForAlert,
  onEdit,
}: ItemCProps) => {
  return (
    <ItemWrapper>
      <Typography text={name} type={TextType.HINT} />
      <Typography
        text={`${Strings.UnitInInventory} ${numOfUnits.toString()}`}
        type={TextType.HINT}
      />
      <Typography
        text={`${Strings.UnitBeforeWarning} ${minimumForAlert.toString()}`}
        type={TextType.HINT}
      />
      <FaEdit
        cursor={"pointer"}
        onClick={() => onEdit({ id, name, numOfUnits, minimumForAlert })}
      />
    </ItemWrapper>
  );
};

export default Item;
