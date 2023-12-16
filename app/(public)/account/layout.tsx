import { redirect } from 'next/navigation';

import { auth } from '@/app/_helpers/server';
// import { Alert } from '@/app/_components';
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
    // if logged in redirect to home page
    if (auth.isAuthenticated()) {
        redirect('/');
    }

    return (
        <div className='flex flex-col h-full'>
            {/* <Alert /> */}
            {children}
        </div>
    )
};
export default Layout;