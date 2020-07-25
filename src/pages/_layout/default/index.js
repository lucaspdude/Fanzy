import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from '~/components/Header';
import Sidebar from '~/components/Sidebar';
import { useDispatch, useSelector } from 'react-redux';

import { Main, Container } from './styles';

export default function DefaultLayout({ children }) {

    return (
        <>
            <Header />
        <Container>
            <Sidebar />
            <Main>{children}</Main>
        </Container>
        </>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired,
};
