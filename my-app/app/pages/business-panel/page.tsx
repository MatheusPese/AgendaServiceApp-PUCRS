'use client'

import { useState } from 'react';
import PageTemplate from '@/app/components/page-template/page-template';
import FloatingMenu from '@/app/components/floating-menu/floating-menu';
import BusinessItem from './business-item/business-item';
import Button from '@/app/components/button/button';


export default function Home() {
  const [menuVisible, setMenuVisible] = useState(false);

  const MenuClick = () => {
    setMenuVisible(!menuVisible);
  };

  const Top = (
    <div className='m-auto'>Negócios</div>
  );

  var business = ["Salão de Beleza 1", "Salão de Beleza 2", "Salão de Beleza 3"];

  const Middle = (
    <div id="list" className="space-y-2">
      {business.map((item, index) => (
        <BusinessItem>
          {item}
        </BusinessItem>
      ))}
      {menuVisible && <FloatingMenu />}
    </div>
  );


  const Bottom = (
    <div className='mx-auto flex w-full justify-between'>
      <Button className='flex-2 m-2' onClick={MenuClick}>
        Menu
      </Button>
    </div>
  );

  return (
    <PageTemplate>
      {{
        Top: Top,
        Middle: Middle,
        Bottom: Bottom,
      }}
    </PageTemplate>
  );
}