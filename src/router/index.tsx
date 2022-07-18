import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import App from '../App';

interface Iroute {
    path: string;
    component: React.FC;
    children?: Iroute[];
}

const routeArr: Iroute[] = [
    {
        path: '/',
        component: App,
        children: [
            // { path: 'list', component: lazy(() => import('../pages/List')) },
        ],
    },
    { path: '/login', component: lazy(() => import('../Login')) },
];

const MyRouter = () => (
    <BrowserRouter>
        <Suspense fallback={<div>loading...</div>}>
            <Routes>
                {routeArr.map((item, index) => (
                    <Route key={index} path={item.path} element={<item.component />}></Route>
                ))}
            </Routes>
        </Suspense>
    </BrowserRouter>
);

export default MyRouter;
