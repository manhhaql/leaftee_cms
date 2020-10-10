import React from 'react';
import { Redirect } from 'react-router';

import MainComponent from '../modules/main/components/';


const AppRouter = [
    {
        path: `/main`,
        component: MainComponent
    }
];

export default AppRouter;