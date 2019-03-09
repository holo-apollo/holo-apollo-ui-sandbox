// @flow
import * as React from 'react';
import Link from 'next/link';
import { Case } from 'react-case-when';
import { isEmpty } from 'ramda';

import { Cont, CrumbLink, LastCrumb, Triangle } from './styled';

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
      <Triangle />
      {crumbs.slice(0, -1).map(crumb => (
        <React.Fragment key={crumb.link}>
          <Link href={crumb.link}>
            <a>
              <CrumbLink>{crumb.message}</CrumbLink>
            </a>
          </Link>
          <Triangle />
        </React.Fragment>
      ))}
      <LastCrumb>{crumbs[crumbs.length - 1].message}</LastCrumb>
    </Case>
  </Cont>
);

export default BreadCrumbs;
