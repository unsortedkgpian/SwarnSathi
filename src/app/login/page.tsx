'use client';

import SignInRegister from '@/components/SignInRegister';
import PageTitle from '@/components/PageTitle';
import React from "react";
// import '../globals.css'

const LoginPage = () => {
    return (
        <>
        <br></br>
        <br></br>
        <br></br>
            <PageTitle 
                title="Login to Your Account" 
                bgColor="#f8f9fa"
            />
            <SignInRegister/>
        </>
    );
};

export default LoginPage;
