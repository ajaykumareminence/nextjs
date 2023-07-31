"use client"
import { AppProgressBar } from 'next-nprogress-bar';
import React from 'react';
export default function ProgressBar({ children }) {
    return (
        <React.Fragment>
            {children}
            <AppProgressBar
                height="4px"
                color="green"
                options={{ showSpinner: false }}
                shallowRouting
            />

        </React.Fragment>
    )
}