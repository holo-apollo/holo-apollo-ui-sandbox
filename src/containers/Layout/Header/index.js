// @flow
import React, { Fragment } from 'react';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import { Emoji } from 'emoji-mart';

import AuthLink from 'common/components/buttons/AuthLink';
import { getEnv } from 'helpers/misc';
import {
  getHomePageLink,
  getCategoryPageLink,
  getGoodsLink,
  getSaleLink,
  getCartLink,
} from 'helpers/urls';
import type { Category } from 'containers/Entities/Categories/types';
import {
  Cont,
  ContentCont,
  LeftCont,
  MiddleCont,
  RightCont,
  Logo,
  MenuCont,
  MenuItem,
  ProfileMenuCont,
  AuthLinkCont,
  ShoppingCont,
  GoodOrdersCountCont,
} from './styled';
import messages from './messages';

const staticRoot = getEnv('STATIC_ROOT') || '';

const logo3x = `${staticRoot}/img/holo-apollo-logo-transpl@3x.png`;
const logo2x = `${staticRoot}/img/holo-apollo-logo-transpl@2x.png`;
const logo1x = `${staticRoot}/img/holo-apollo-logo-transpl.png`;

type Props = {
  categories: Category[],
  isAuthenticated: boolean,
  goodOrdersCount: number,
  activeCategory?: string,
  onLoginClick: () => void,
  onSignupClick: () => void,
};

const Header = ({
  categories,
  goodOrdersCount,
  activeCategory,
  isAuthenticated,
  onLoginClick,
  onSignupClick,
}: Props) => (
  <Cont>
    <ContentCont>
      <LeftCont>
        <Link href={getHomePageLink()}>
          <a>
            <Logo
              src={logo3x}
              srcSet={`${logo1x}, ${logo2x} 2x, ${logo3x} 3x`}
              alt="logo"
            />
          </a>
        </Link>
      </LeftCont>
      <MiddleCont>
        <MenuCont>
          <Link href={getGoodsLink()}>
            <a>
              <MenuItem isActive={activeCategory === 'all'}>
                <FormattedMessage {...messages.all} />
              </MenuItem>
            </a>
          </Link>
          {categories.map(category => (
            <Link href={getCategoryPageLink(category.slug)} key={category.slug}>
              <a>
                <MenuItem isActive={activeCategory === category.slug}>
                  {category.name}
                </MenuItem>
              </a>
            </Link>
          ))}
          <Link href={getSaleLink()}>
            <a>
              <MenuItem isActive={activeCategory === 'sale'}>
                <FormattedMessage {...messages.sale} />
              </MenuItem>
            </a>
          </Link>
        </MenuCont>
      </MiddleCont>
      <RightCont>
        <ProfileMenuCont>
          {!isAuthenticated && (
            <Fragment>
              <AuthLinkCont>
                <AuthLink onClick={onLoginClick}>
                  <FormattedMessage {...messages.login} />
                </AuthLink>
              </AuthLinkCont>
              <AuthLinkCont>
                <AuthLink onClick={onSignupClick}>
                  <FormattedMessage {...messages.signup} />
                </AuthLink>
              </AuthLinkCont>
            </Fragment>
          )}
        </ProfileMenuCont>
        <Link href={getCartLink()}>
          <a>
            <ShoppingCont>
              <Emoji emoji="shopping_bags" size={26} />
              <GoodOrdersCountCont>{goodOrdersCount}</GoodOrdersCountCont>
            </ShoppingCont>
          </a>
        </Link>
      </RightCont>
    </ContentCont>
  </Cont>
);

export default Header;
