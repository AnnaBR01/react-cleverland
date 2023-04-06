import { useEffect, useState } from 'react';

import { CloseSearchIcon, ColumnIcon, FilterIconDown, FilterIconUp, SearchIcon, SquareIcon } from '../../assets';
import { useToggle, useWindowSize } from '../../hooks';
import {
  changeDisplayedBooksByRating,
  changeRatingType,
  changeSearchValue,
  getBooks,
  useAppDispatch,
  useAppSelector,
} from '../../store';
import { Breakpoint } from '../../ui';

import {
  ButtonColumn,
  ButtonSquare,
  CloseSearchButton,
  Filter,
  Search,
  SearchButton,
  SearchInput,
  SortIconContainer,
  StyledNavigation,
  Text,
  WrapperInputs,
  WrapperSorting,
} from './styles';

interface IProps {
  isColumn: boolean;
  isSquare: boolean;
  handleColumnView: () => void;
  handleSquareView: () => void;
}

export const Navigation = ({ isColumn, isSquare, handleColumnView, handleSquareView }: IProps) => {
  const dispatch = useAppDispatch();
  const { width = 0 } = useWindowSize();
  const { ratingType } = useAppSelector(getBooks);
  const [isSearchOpen, toggleIsSearchOpen] = useToggle(false);
  const [activeColor, toggleActiveColor] = useState(false);
  const [searchInputValue, changeSearchInputValue] = useState('');

  const handleSearchView = () => {
    if (width < Breakpoint.SM) {
      toggleIsSearchOpen();
    }
  };

  const handleView = () => {
    handleColumnView();
    handleSquareView();
  };

  const handleRating = () => {
    dispatch(changeRatingType());
    dispatch(changeDisplayedBooksByRating());
  };

  const handleSearchInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeSearchInputValue(e.target.value);
  };

  useEffect(() => {
    dispatch(changeSearchValue(searchInputValue));
  }, [dispatch, searchInputValue]);

  return (
    <StyledNavigation>
      <WrapperInputs $isSearchOpen={isSearchOpen}>
        <Search $isSearchOpen={isSearchOpen}>
          <SearchButton onClick={handleSearchView} $isSearchOpen={isSearchOpen} data-test-id='button-search-open'>
            <SearchIcon fill={activeColor ? '#F83600' : '#A7A7A7'} />
          </SearchButton>

          <SearchInput
            placeholder='Поиск книги или автора…'
            type='text'
            $isSearchOpen={isSearchOpen}
            data-test-id='input-search'
            onFocus={() => {
              toggleActiveColor(true);
            }}
            onBlur={() => {
              toggleActiveColor(false);
            }}
            value={searchInputValue}
            onChange={handleSearchInputValue}
          />
          <CloseSearchButton
            $isSearchClose={!isSearchOpen}
            onClick={handleSearchView}
            data-test-id='button-search-close'
          >
            <CloseSearchIcon />
          </CloseSearchButton>
        </Search>

        <Filter $isSearchOpen={isSearchOpen} type='button' onClick={handleRating} data-test-id='sort-rating-button'>
          <SortIconContainer>{ratingType === 'down' ? <FilterIconDown /> : <FilterIconUp />}</SortIconContainer>
          <Text>По рейтингу </Text>
        </Filter>
      </WrapperInputs>

      <WrapperSorting $isSearchOpen={isSearchOpen}>
        <ButtonSquare onClick={handleView} $isSquare={isSquare} type='button' data-test-id='button-menu-view-window'>
          <SquareIcon fill={isSquare ? '#FFFFFF' : '#A7A7A7'} />
        </ButtonSquare>
        <ButtonColumn onClick={handleView} $isColumn={isColumn} type='button' data-test-id='button-menu-view-list'>
          <ColumnIcon fill={isColumn ? '#FFFFFF' : '#A7A7A7'} />
        </ButtonColumn>
      </WrapperSorting>
    </StyledNavigation>
  );
};
