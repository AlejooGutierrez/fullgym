import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Body } from '../pages/Body';
import { Footer } from '../component/Footer';
import { Nav } from '../component/Nav';
import { Noticess } from '../pages/Nosotros';
import { ContactUs } from '../infoPages/ContactUs';
import { ButtonWapp } from '../molecules/ButtonWapp';

export const Routes = () => (
    <Router>
        <Nav />
        <Switch>
            <Route path="/contactenos" component={ContactUs}/>
            <Route path="/noticias" component={Noticess}/>
            <Route path="/" component={Body}/>
        </Switch>
        <ButtonWapp />
        <Footer />
    </Router>
)

