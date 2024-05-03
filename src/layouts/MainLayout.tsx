import { Fragment, ReactNode } from 'react';

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <main className="">{children}</main>
    </Fragment>
  );
}

export default MainLayout;
