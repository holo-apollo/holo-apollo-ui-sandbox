// @flow
import * as React from 'react';
import Link from 'next/link';
import { Case } from 'react-case-when';
import { isEmpty } from 'ramda';

import Triangle from 'common/components/icons/Triangle';
import { Cont, CrumbLink, LastCrumb } from './styled';

type Crumb = {
  message: React.Node,
  link: string,
};

type Props = {
  crumbs: Crumb[],
};

const BreadCrumbs = ({ crumbs }: Props) => (
  <Cont>
    <Link href="/">
      <a>
        <CrumbLink>Holo-Apollo</CrumbLink>
      </a>
    </Link>
    <Case when={!isEmpty(crumbs)}>
      <Triangle direction="right" height={8} />
      {crumbs.slice(0, -1).map(crumb => (
        <React.Fragment key={crumb.link}>
          <Link href={crumb.link}>
            <a>
              <CrumbLink>{crumb.message}</CrumbLink>
            </a>
          </Link>
          <Triangle direction="right" height={8} />
        </React.Fragment>
      ))}
      <LastCrumb>{crumbs[crumbs.length - 1].message}</LastCrumb>
    </Case>
  </Cont>
);

export default BreadCrumbs;
