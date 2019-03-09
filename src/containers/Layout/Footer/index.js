// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';

import type { Category } from 'containers/Entities/Categories/types';
import Facebook from 'common/components/icons/Facebook';
import Instagram from 'common/components/icons/Instagram';
import AuthLink from 'common/components/buttons/AuthLink';
import Button from 'common/components/buttons/Button';
import { getEnv } from 'helpers/misc';
import {
  Cont,
  ContentCont,
  LeftCont,
  RightCont,
  LinksCont,
  SocialLinksCont,
  LinksColumn,
  LinksColumnHeader,
  LinksColumnBody,
  RightTopCont,
  AuthLinksCont,
  BrandingCont,
  InfoCont,
  Logo,
} from './styled';
import messages from './messages';

const staticRoot = getEnv('STATIC_ROOT') || '';

type Props = {
  categories: Category[],
  isAuthenticated: boolean,
  onLoginClick: () => void,
  onSignupClick: () => void,
  onRegisterStoreClick: () => void,
};

const Footer = ({
  categories,
  isAuthenticated,
  onLoginClick,
  onSignupClick,
  onRegisterStoreClick,
}: Props) => (
  <Cont>
    <ContentCont>
      <LeftCont>
        <LinksCont>
          <LinksColumn>
            <LinksColumnHeader>
              <FormattedMessage {...messages.catalog} />
            </LinksColumnHeader>
            <LinksColumnBody>
              {categories.map(category => (
                <Link href="#" key={category.slug}>
                  <a>{category.name}</a>
                </Link>
              ))}
              <Link href="#">
                <a>
                  <FormattedMessage {...messages.allGoods} />
                </a>
              </Link>
            </LinksColumnBody>
          </LinksColumn>
          <LinksColumn>
            <LinksColumnHeader>
              <FormattedMessage {...messages.adventures} />
            </LinksColumnHeader>
            <LinksColumnBody>
              <Link href="#">
                <a>
                  <FormattedMessage {...messages.stores} />
                </a>
              </Link>
              <Link href="#">
                <a>
                  <FormattedMessage {...messages.sale} />
                </a>
              </Link>
            </LinksColumnBody>
          </LinksColumn>
          <LinksColumn>
            <LinksColumnHeader>
              <FormattedMessage {...messages.information} />
            </LinksColumnHeader>
            <LinksColumnBody>
              <Link href="#">
                <a>
                  <FormattedMessage {...messages.contacts} />
                </a>
              </Link>
              <Link href="#">
                <a>
                  <FormattedMessage {...messages.paymentAndDelivery} />
                </a>
              </Link>
              <Link href="#">
                <a>
                  <FormattedMessage {...messages.privacy} />
                </a>
              </Link>
              <Link href="#">
                <a>
                  <FormattedMessage {...messages.terms} />
                </a>
              </Link>
              <Link href="#">
                <a>
                  <FormattedMessage {...messages.about} />
                </a>
              </Link>
            </LinksColumnBody>
          </LinksColumn>
        </LinksCont>
        <SocialLinksCont>
          <a href="https://www.instagram.com/holo.apollo.art/" target="_blank">
            <Instagram height={29} />
          </a>
          <a
            href="https://www.facebook.com/Holo-Apolloart-1436352019827845"
            target="_blank"
          >
            <Facebook height={29} />
          </a>
        </SocialLinksCont>
      </LeftCont>
      <RightCont>
        <RightTopCont>
          {!isAuthenticated && (
            <AuthLinksCont>
              <AuthLink onClick={onLoginClick}>
                <FormattedMessage {...messages.login} />
              </AuthLink>
              <AuthLink onClick={onSignupClick}>
                <FormattedMessage {...messages.signup} />
              </AuthLink>
            </AuthLinksCont>
          )}
          <Button onClick={onRegisterStoreClick}>
            <FormattedMessage {...messages.registerStore} />
          </Button>
        </RightTopCont>
        <BrandingCont>
          <InfoCont>
            <h1>Holo-Apollo.art</h1>
            <h3>
              <FormattedMessage {...messages.showroom} />
            </h3>
            <p>© 2018 Hollo Apollo</p>
          </InfoCont>
          <Logo src={`${staticRoot}/img/image_holo.png`} alt="logo" />
        </BrandingCont>
      </RightCont>
    </ContentCont>
  </Cont>
);

export default Footer;
