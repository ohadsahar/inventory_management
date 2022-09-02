import { Strings } from '@/config/Strings';
import { useSearch } from '@/core/components/Item/hooks/useSearch';
import React from 'react';
import { SearchBarInput, SearchBarWrapper } from './Styled';

const SearchBar = () => {
  const { handleSearchValue } = useSearch();
  return (
    <SearchBarWrapper>
      <SearchBarInput
        placeholder={Strings.SearchBarPlaceholder}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleSearchValue(event.currentTarget.value);
        }}
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;
