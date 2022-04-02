import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const Layout = (props) => {
    return (
        <>
            <Header />
            {<props.page/>}
            <Footer />
        </>
    );
};

export default Layout;