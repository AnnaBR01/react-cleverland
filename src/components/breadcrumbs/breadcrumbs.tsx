/* eslint-disable no-negated-condition */
import { Link, useLocation } from 'react-router-dom';

import { ROUTE } from '../../routes/routes';
import { getBookDetails, useAppSelector } from '../../store';

import { BreadcrumbsContent, StyledBreadcrumbs, Text, Wrapper } from './styles';

export const Breadcrumbs = () => {
  const { errorBookDetails } = useAppSelector(getBookDetails);
  const { state } = useLocation();

  return (
    <StyledBreadcrumbs>
      <BreadcrumbsContent>
        {!state ? (
          <Wrapper>
            <Link to={`${ROUTE.BOOKS}/all`}>
              <Text data-test-id='breadcrumbs-link'>Все книги</Text>
            </Link>
            /
          </Wrapper>
        ) : errorBookDetails ? (
          <Wrapper>
            <Link to={`${ROUTE.BOOKS}/${state.pathCategory}`}>
              <Text data-test-id='breadcrumbs-link'>{state.nameCategory}</Text>
            </Link>
            /
          </Wrapper>
        ) : (
          <Wrapper>
            <Link to={`${ROUTE.BOOKS}/${state.pathCategory}`}>
              <Text data-test-id='breadcrumbs-link'>{state.nameCategory}</Text>
            </Link>
            / <Text data-test-id='book-name'>{state.nameBook}</Text>
          </Wrapper>
        )}
      </BreadcrumbsContent>
    </StyledBreadcrumbs>
  );
};
