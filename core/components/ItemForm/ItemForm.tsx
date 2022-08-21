import { Strings } from "@/config/Strings";
import { TextType } from "@/config/TextType";
import { useItemForm } from "@/core/hooks/useItemForm";
import AppInput from "@/shared/AppInput/AppInput";
import Typography from "@/shared/Typography/Typography";
import { ItemProps } from "models/item.model";
import { FaCheck } from "react-icons/fa";
import ItemActions from "../EditItemActions/EditItemActions";
import { ApproveEditWrapper, InputWrapper, ItemFormWrapper } from "./Styled";

const ItemForm = ({
  id,
  name,
  numOfUnits,
  minimumForAlert,
  onFinished,
}: ItemProps) => {
  const { handleAction, onSubmit, currentItem } = useItemForm({
    id,
    name,
    numOfUnits,
    minimumForAlert,
    onFinished,
  });

  return (
    <ItemFormWrapper>
      <InputWrapper>
        <Typography type={TextType.LABEL} text={Strings.NameOfItem} />
        <AppInput
          fieldName="name"
          defaultValue={currentItem.name}
          onAction={handleAction}
        />
      </InputWrapper>
      <InputWrapper>
        <Typography type={TextType.LABEL} text={Strings.UnitInInventory} />
        <ItemActions
          currentValue={currentItem.numOfUnits}
          onAction={handleAction}
          fieldName={"numOfUnits"}
        />
      </InputWrapper>
      <InputWrapper>
        <Typography type={TextType.LABEL} text={Strings.UnitBeforeWarning} />
        <ItemActions
          currentValue={currentItem.minimumForAlert}
          onAction={handleAction}
          fieldName={"minimumForAlert"}
        />
      </InputWrapper>
      <ApproveEditWrapper>
        <FaCheck cursor={"pointer"} type="submit" onClick={onSubmit} />
      </ApproveEditWrapper>
    </ItemFormWrapper>
  );
};

export default ItemForm;
