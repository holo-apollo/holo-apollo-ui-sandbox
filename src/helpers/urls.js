// @flow
export const getHomePageLink = () => '/';

export const getGoodsLink = () => '/goods';

export const getGoodPageLink = (goodId: number) => `/goods/${goodId}`;

export const getCategoryPageLink = (categorySlug: string) =>
  `/goods?category=${categorySlug}`;

export const getStoresLink = () => '/stores';

export const getContactsLink = () => '/contacts';

export const getPrivacyLink = () => '/privacy';

export const getTermsLink = () => '/terms';

export const getPaymentLink = () => '/payment';

export const getAboutLink = () => '/about';

export const getSaleLink = () => '/goods?sale=true';

export const getCartLink = () => '/cart';

export const getApplicationLink = () => '/application';
