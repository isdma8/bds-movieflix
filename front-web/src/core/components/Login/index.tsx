import { saveSessionData } from 'core/utils/auth';
import { makeLogin } from 'core/utils/request';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';  
import ButtonIcon from '../ButtonIcon';
import Card from '../Card';
import './styles.scss';
import {ReactComponent as Eye} from 'core/assets/images/eye.svg';

type FormState = {
    username: string;
    password: string;
}

/*type LocationState = {
    from: string;
}*/

const Login = () => {
    const history = useHistory();

    const { register, handleSubmit, errors } = useForm<FormState>(); //Form

    const [hasError, setHasError] = useState(false);

    const [showpass, setShowpass] = useState(false);

    //const location = useLocation<LocationState>();

    //const { from } = location.state || { from: { pathname: "/" } }; //caso nao existe a rota para onde o user queria ir redireciono para admin

    function openeyes(){
        console.log("E ai");
        setShowpass(!showpass);

    }

    const onSubmit = (data: FormState) => {

        makeLogin(data)
        .then(response => {
            setHasError(false);
            saveSessionData(response.data);
            history.push('/movies');
            //history.replace(from);
        })
        .catch(() => {
            setHasError(true);
        })
    }

    return(
        <Card >
            {hasError && (
                <div className="alert alert-danger mt-5">
                Usuário ou senha inválidos!
                </div>
            )}
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}> 
                    <div className="margin-bottom-40">

                        <input 
                            type="email" 
                            className={`form-control input-base ${errors.username && 'is-invalid'} `}
                            placeholder="Email"
                            name="username" 
                            ref={register({
                                required: "Campo obrigatório",
                                pattern: {
                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: "Email inválido"
                                }
                            })}
                        />
                        {errors.username && (
                            <div className="invalid-feedback d-block">
                                {errors.username.message} 
                            </div>
                        )}
                                            
                    </div>
                    <div className="margin-bottom-40 password-container">

                        <input 
                            type={showpass ? "text" : "password"} 
                            className={`form-control input-base ${errors.password ? 'is-invalid' : ''} `}
                            placeholder="Senha"
                            name="password" 
                            ref={register({required: "Campo obrigatório", minLength: 5})}
                            
                            
                        />
                        <Eye className="eye-password-image" onClick={openeyes} />
                        {errors.password && (
                            <div className="invalid-feedback d-block">
                                {errors.password.message}
                            </div>
                            
                        )}

                        

                    </div>

                    <div className="login-submit">
                        <ButtonIcon text="logar" />
                    </div>
                    
            </form>
        </Card>
    );
}


export default Login;