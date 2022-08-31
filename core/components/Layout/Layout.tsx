import ItemsList from '@/core/components/ItemsList/ItemsList';
import SearchBar from '@/core/components/SearchBar/SearchBar';
import AddItemForm from '../AddItemForm/AddItemForm';
import { LayoutWrapper } from './Styled';

const Layout = () => {
  return (
    <LayoutWrapper>
      <SearchBar />
      <AddItemForm />
      <ItemsList />
    </LayoutWrapper>
  );
};

export default Layout;
