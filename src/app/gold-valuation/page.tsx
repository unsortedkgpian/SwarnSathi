'use client';

import LoanCalculation from "@/components/schemes/LoanCalculation";
import GoldValuation from "../../components/gold-valuation/GoldValuation"
import React from "react";
// import '../globals.css'

const LoginPage = () => {
    return (
        <>
            <br /><br /><br /><br />
            <GoldValuation/>
            <LoanCalculation />
        </>
    );
};

export default LoginPage;
