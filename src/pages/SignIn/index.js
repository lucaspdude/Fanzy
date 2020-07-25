import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from '~/store/modules/auth/actions';

// import logo from '~/assets/images/logo.png';

import { Container, Logo, ImageBG, Links } from './styles';
import {auth, database} from '~/services/firebase.utils';
import { toast } from 'react-toastify';


const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um e-mail no formato correto')
        .required('E-mail obrigatorio'),
    password: Yup.string()
        .min(6, 'A senha deve ter no minimo 6 caracteres')
        .required('Senha Obrigatoria'),
});

export default function SignIn() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    function handleSubmit(data) {
        setLoading(true);
        const {email, password} = data;
        database.collection('adminUsers')
        .get()
        .then((response) => {
            const stores = response.docs.map(item => {
                const obj = item.data();
                return obj;
            })


            auth.signInWithEmailAndPassword(email, password)
                .then(response => {
                    const currentUser = response.user;
                    const currentUserIsAdmin = stores.filter(store => store.user_id === currentUser.uid);
                    if(currentUserIsAdmin.length === 0){
                        toast.error("You don't have permissions to access this dashboard");
                        
                    }else{
                        
                        dispatch(signInRequest(currentUser))
                    }
                    setLoading(false)
                })
                .catch(error => {
                    toast.error(error.message)
                })
        })
        .catch((error) => {
            console.log(error)
            return ;
        })

        
        // auth.signInWithEmailAndPassword(email, password)
        //                         .then(response => {
        //                             const currentUser = response.user;
        //                             console.log(currentUser)

        //                             console.log(adminUsers)
        //                             if(currentUser.uid.indexOf(adminUsers.user_id) === -1){
        //                                 console.log("Incluido")
        //                             }else{
        //                                 console.log("Não é ADMIN")
        //                             }

        //                             // dispatch(signInRequest(response.user))
        //                         })
        //                         .catch(error => {
        //                             console.log(error)
        //                             toast.error(error.message)
        //                         })

    }

    return (
        <>
        <Container className="col-12 col-md-6">
            {/* <Logo src={logo} alt="Logo" className="logo" /> */}

            <Form schema={schema} onSubmit={handleSubmit} className="frm__signIn">
                <Input name="email" type="email" placeholder="E-mail" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                />

                <Links className="d-flex flex-column align-items-center">
                    <button type="submit" className="btn btn-warning ">
                        {loading ? 'Loading...' : 'Login'}
                    </button>
                    <Link to="/forgot">Reset Password</Link>
                </Links>

            </Form>
        </Container>
        <ImageBG className="col-12 col-md-6"></ImageBG>
        </>
    );
}
