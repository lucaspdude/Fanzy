import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';


import logo from '~/assets/images/logo.png';

import { Container, Logo, ImageBG, Links } from './styles';
import { auth } from '~/services/firebase.utils';
import { toast } from 'react-toastify';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um e-mail no formato correto')
        .required('E-mail obrigatorio'),
});

export default function Forgot() {
    const [loading, setLoading] = useState(false)
    const [actionSucceded, setAcctionSucced] = useState(false)

    function handleSubmit(data) {
      setLoading(true)
      auth.sendPasswordResetEmail(data.email)
        .then(response => {
          toast.success("A password reset link was sent to your e-mail")
          setLoading(false)
          setAcctionSucced(true)
        })
        .catch(error => {
          toast.error(error.message)
          setLoading(false)
        })

    }

    return (
        <>
        <Container className="col-12 col-md-6">

            <Form schema={schema} onSubmit={handleSubmit} className="frm__signIn">

                  {!actionSucceded && 
                  <>
                    <h3>Provide your e-mail bellow <br /> to recover your password</h3>
                    <Input name="email" type="email" placeholder="your@email" />
                    <Links className="d-flex flex-column align-items-center">
                      <button type="" className="btn btn-warning">
                          {loading ? 'loading...' : 'Recover Password'}
                      </button>
                      <Link to="/" >Back to Login</Link>
                    </Links>
                  </>
                  }

                  {actionSucceded && 
                  <>
                    <h3>Check your e-mail for  <br /> password recovery instructions</h3>
                    
                    <Links className="d-flex flex-column align-items-center">
                      
                      <Link to="/" >Back to Login</Link>
                    </Links>
                  </>
                  }



            </Form>
        </Container>
        <ImageBG className="col-12 col-md-6"></ImageBG>
        </>
    );
}
