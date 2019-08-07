// @flow
import * as React from 'react';
import { Case } from 'react-case-when';
import { isNil, isEmpty } from 'ramda';
import type { IntlShape } from 'react-intl';

import SearchField from 'common/components/inputs/SearchField';
import Header from './Header';
import BreadCrumbs from './BreadCrumbs';
import Footer from './Footer';
import {
  HeaderCont,
  BelowHeaderContent,
  SearchCont,
  FooterCont,
  MainCont,
  ContentCont,
  ChildrenCont,
} from './styled';
import messages from './messages';

type HeaderProps = React.ElementConfig<typeof Header>;
type BreadCrumbsProps = React.ElementConfig<typeof BreadCrumbs>;
type FooterProps = React.ElementConfig<typeof Footer>;
type SearchProps = React.ElementConfig<typeof SearchField>;

type Props = {
  ...$Exact<BreadCrumbsProps>,
  ...$Exact<HeaderProps>,
  ...$Exact<FooterProps>,
  withSearch: boolean,
  onSearch: $PropertyType<SearchProps, 'onSearch'>,
  intl: IntlShape,
  children: React.Node,
};

const PureLayout = ({
  withSearch,
  isAuthenticated,
  goodOrdersCount,
  activeCategory,
  onLoginClick,
  onSignupClick,
  onSearch,
  crumbs,
  categories,
  intl: { formatMessage },
  children,
}: Props) => (
  <React.Fragment>
    <HeaderCont>
      <Header
        categories={categories}
        isAuthenticated={isAuthenticated}
        goodOrdersCount={goodOrdersCount}
        activeCategory={activeCategory}
        onLoginClick={onLoginClick}
        onSignupClick={onSignupClick}
      />
    </HeaderCont>
    <MainCont>
      <ContentCont>
        <Case when={withSearch || !isNil(crumbs)}>
          <BelowHeaderContent>
            {!isNil(crumbs) && !isEmpty(crumbs) && (
              <BreadCrumbs crumbs={crumbs} />
            )}
            <span />
            {withSearch && (
              <SearchCont>
                <SearchField
                  onSearch={onSearch}
                  placeholder={formatMessage(messages.search)}
                />
              </SearchCont>
            )}
          </BelowHeaderContent>
        </Case>
        <ChildrenCont>{children}</ChildrenCont>
      </ContentCont>
    </MainCont>
    <FooterCont>
      <Footer
        categories={categories}
        isAuthenticated={isAuthenticated}
        onLoginClick={onLoginClick}
        onSignupClick={onSignupClick}
      />
    </FooterCont>
  </React.Fragment>
);

export default PureLayout;
