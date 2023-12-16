//aqui será definida a manipulação dos dados das páginas filho.

import type { NextPage } from "next";
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
};

export default Layout;