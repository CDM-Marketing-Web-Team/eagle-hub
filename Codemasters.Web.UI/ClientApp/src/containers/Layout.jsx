import React from 'react';
import { Container } from 'reactstrap';
import Footer from '../components/Footer/Footer';
import { AppContext } from '../context/ApplicationContext';

export default function Layout(props) {
    return (
        <React.Fragment>
            <Container fluid style={{minHeight: '100%'}}>
                {props.children}
            </Container>
            <AppContext.Consumer>
                {context => <Footer {...context}/>}
            </AppContext.Consumer>         
        </React.Fragment>
    )
}
