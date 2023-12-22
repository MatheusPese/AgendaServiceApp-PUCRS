'use client';


import { useEffect } from 'react';

import { useUserService } from '@/app/_services';
import { redirect } from 'next/navigation';


export default Home;

function Home() {
    const userService = useUserService();
    const user = userService.currentUser;
    useEffect(() => {
        userService.getCurrent();
    }, []);

    if (user) {
        redirect('/business-panel')
    } else {
        return <p>loading... <span className="spinner-border spinner-border-sm me-1"></span></p>;
    }
}
