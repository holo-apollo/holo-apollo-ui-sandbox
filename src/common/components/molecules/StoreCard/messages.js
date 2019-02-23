import { defineMessages } from 'react-intl';

export default defineMessages({
  goods: {
    id: 'StoreCard.goods',
    defaultMessage: `{goodsCount, plural, 
      one {good}
      few {goods}
      many {goods}
      other {goods}
    }`,
  },
});
