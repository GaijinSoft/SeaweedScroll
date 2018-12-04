import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import Support from './components/Support';
import NotFound from './components/NotFound';
import FetchData from './components/FetchData';
import Counter from './components/Counter';

export const routes = <Layout>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Support' component={Support} />
        <Route component={NotFound} />
    </Switch>
</Layout>;
