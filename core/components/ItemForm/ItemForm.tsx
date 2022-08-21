import { Strings } from "@/config/Strings";
import { TextType } from "@/config/TextType";
import { useAppForm } from "@/core/hooks/useAppForm";
import AppInput from "@/shared/AppInput/AppInput";
import Typography from "@/shared/Typography/Typography";
import { ItemProps } from "models/item.model";
import { FaCheck } from "react-icons/fa";
import ItemActions from "../ItemActions/ItemActions";
import { InputWrapper, ItemFormWrapper } from "./Styled";

const ItemForm = ({ id, name, numOfUnits, minimumForAlert }: ItemProps) => {
  const { currentItem, register, handleSubmit, handleAction, onSubmit } =
    useAppForm({
      id,
      name,
      numOfUnits,
      minimumForAlert,
    });
  return (
    <ItemFormWrapper>
      <InputWrapper>
        <Typography type={TextType.LABEL} text={Strings.NameOfItem} />
        <AppInput {...{ register, fieldName: "name" }} />
      </InputWrapper>
      <InputWrapper>
        <Typography type={TextType.LABEL} text={Strings.UnitInInventory} />
        <ItemActions
          fieldName={"numOfUnits"}
          currentValue={currentItem.numOfUnits}
          onAction={handleAction}
        />
      </InputWrapper>
      <InputWrapper>
        <Typography type={TextType.LABEL} text={Strings.UnitBeforeWarning} />
        <ItemActions
          fieldName={"minimumForAlert"}
          currentValue={currentItem.minimumForAlert}
          onAction={handleAction}
        />
      </InputWrapper>
      <FaCheck
        cursor={"pointer"}
        type="submit"
        onClick={handleSubmit(onSubmit)}
      />
    </ItemFormWrapper>
  );
};

export default ItemForm;
