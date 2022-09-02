import { TextType } from '@/config/TextType';
import Typography from '@/shared/Typography/Typography';
import { AppListItemWrapper, ItemIconWrapper } from './Styled';

interface AppListItemProps {
  id: string;
  text: string;
  currentLayout: string;
  setCurrentLayout: any;
  labelIcon: any;
}

const AppListItem = ({ id, text, currentLayout, setCurrentLayout, labelIcon }: AppListItemProps) => {
  return (
    <AppListItemWrapper onClick={() => setCurrentLayout(id)} active={currentLayout === id}>
      <ItemIconWrapper active={currentLayout === id}>{labelIcon}</ItemIconWrapper>
      <Typography text={text} type={TextType.HINT} color={currentLayout === id ? 'black' : 'white'} />
    </AppListItemWrapper>
  );
};

export default AppListItem;
