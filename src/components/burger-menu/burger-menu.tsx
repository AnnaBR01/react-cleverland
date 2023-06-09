import { useEffect } from 'react';
import { useMatch, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { ChevronBottomIcon, ChevronTopIcon } from '../../assets';
import { ROUTE } from '../../routes/routes';
import {
  changeBooksBySearch,
  changeDisplayedBooks,
  changeDisplayedBooksByCategory,
  getBooks,
  getCategories,
  logout,
  useAppDispatch,
  useAppSelector,
} from '../../store';
import { CustomAsidelink } from '..';

import {
  Amount,
  CategoryBox,
  ChevronButton,
  Separator,
  StyledBurgerMenu,
  Text,
  Wrapper,
  WrapperChevron,
} from './styles';

interface IProps {
  menuOpen: boolean;
  isOpen: boolean;
  toggleMenuMode: () => void;
  handleCategories: () => void;
  closeCategories: () => void;
}

export const BurgerMenu = ({ toggleMenuMode, handleCategories, closeCategories, menuOpen, isOpen }: IProps) => {
  const dispatch = useAppDispatch();
  const currentPath = useParams();
  const { categories } = useAppSelector(getCategories);
  const { books, countCategories, searchValue } = useAppSelector(getBooks);
  const currentPageHome = useMatch(ROUTE.HOME);
  const currentPageCategories = useMatch(ROUTE.CATEGORY);

  const closeBurgerMenu = (): void => {
    closeCategories();

    toggleMenuMode();
  };

  useEffect(() => {
    if (currentPath.category === 'all' || undefined) {
      dispatch(changeDisplayedBooks());
    } else {
      const result = categories.find((item) => item.path === currentPath.category)?.name;

      if (result) dispatch(changeDisplayedBooksByCategory(result));
    }
  }, [categories, currentPath, dispatch, books]);

  useEffect(() => {
    dispatch(changeBooksBySearch(searchValue));
  }, [dispatch, currentPath, searchValue]);

  return (
    <StyledBurgerMenu $menuOpen={menuOpen}>
      <Wrapper>
        <div>
          <CustomAsidelink to={ROUTE.HOME} type='primary' onClick={handleCategories} open={isOpen}>
            <WrapperChevron data-test-id='burger-showcase'>
              <p>Витрина книг</p>
              <ChevronButton $iscurrentPageHome={!!currentPageHome || !!currentPageCategories} type='button'>
                {isOpen ? <ChevronTopIcon /> : <ChevronBottomIcon />}
              </ChevronButton>
            </WrapperChevron>
          </CustomAsidelink>

          {categories.length > 0 && books.length > 0 && (
            <CategoryBox $open={isOpen}>
              <CustomAsidelink to={ROUTE.AllBOOKS} type='secondary' onClick={toggleMenuMode}>
                <Text $open={isOpen} data-test-id='burger-books'>
                  Все книги
                </Text>
              </CustomAsidelink>
              {categories.map(({ name, path }) => (
                <CustomAsidelink
                  to={`${ROUTE.BOOKS}/${path}`}
                  type='secondary'
                  onClick={toggleMenuMode}
                  key={uuidv4()}
                  state={{ nameValue: name, pathValue: path }}
                >
                  <span data-test-id={`burger-${path}`}>{name}</span>
                  <Amount $isActive={currentPath.category === path} data-test-id={`burger-book-count-for-${path}`}>
                    {countCategories[name] ? countCategories[name] : '0'}
                  </Amount>
                </CustomAsidelink>
              ))}
            </CategoryBox>
          )}
        </div>
        <CustomAsidelink to={ROUTE.OFFER} type='primary' onClick={closeBurgerMenu}>
          <p data-test-id='burger-terms'>Правила пользования</p>
        </CustomAsidelink>
        <CustomAsidelink to={ROUTE.RULES} type='primary' onClick={closeBurgerMenu}>
          <p data-test-id='burger-contract'>Договор оферты</p>
        </CustomAsidelink>
      </Wrapper>

      <Separator />

      <Wrapper>
        <CustomAsidelink to='account' type='primary' onClick={closeBurgerMenu}>
          Профиль
        </CustomAsidelink>
        <CustomAsidelink
          to={ROUTE.AUTH}
          type='primary'
          onClick={() => {
            dispatch(logout());
          }}
        >
          <p data-test-id='exit-button'> Выход</p>
        </CustomAsidelink>
      </Wrapper>
    </StyledBurgerMenu>
  );
};
