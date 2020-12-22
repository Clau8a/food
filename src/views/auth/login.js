import React from 'react';
import { useHistory } from 'react-router-dom';
import auth from './auth';
// import '../../Style/login.scss';

const Login = () => {
  const history = useHistory();

  const [formValues, changeValue] = React.useState({ email: '', password: '' });
  const [active, changeActive] = React.useState(false);

  const showLoader = (show) => { };

  function ChangeValues(e) {
    const { name, value } = e.target;
    changeValue({ ...formValues, [name]: value });
  }

  function TogglePassword(e) {
    changeActive(!active);
  }

  const Submit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      showLoader(true);

      auth({ password: formValues.password, email: formValues.email })
        .then(response => {
          // showLoader(false);
          localStorage.setItem('token', response.token);
          // NotificationManager.success('', '¡Bienvenido!', 700);
          setTimeout(() => {
            history.push('/schedule');
          }, 700);

        })
        .catch(error => {
          showLoader(false);
          // NotificationManager.error('Inténtelo más tarde.', 'Ocurrió un error', 4000)
        })
    }
    else {
      // NotificationManager.error('usuario y/o contraseña incorrectos.', 'Error de validación', 4000);
    }
  };

  return (
    <div className="login">
      <div className="contenedor">
        <div className="card" >
          <div className="logo tac">
            {/* <img style={{ width: 'auto', height: '90%', marginTop: '5px' }} src={logo} alt="FoodList" /> */}
          </div>
          <div className="card-body">
            {/* <h3 className="my-3"> Login:</h3> */}
            <div className="tac">
              <label className="welcome">Food List</label>
            </div>

            <form onSubmit={Submit}>
              <div className="form-group tal">
                <label className="label-title">User</label>
                <input
                  name="email"
                  id='email'
                  value={formValues.email}
                  type="email"
                  onChange={ChangeValues}
                  className="form-control"
                  required
                  placeholder="Type email."
                />
              </div>

              <div className="form-group tal">
                <label className="label-title">Password</label>

                <div className="input-group w-100">
                  <input className="form-control"
                    name="password"
                    id='password'
                    value={formValues.password}
                    type={active ? "text" : "password"}
                    onChange={ChangeValues}
                    minLength="6"
                    required
                    placeholder="Type password." />
                  <div className="input-group-append">
                    <button id="btn-sp" className="btn  btn-show-password" onClick={TogglePassword} type="button">
                      {
                        active ?
                          <span className="far fa-eye-slash"></span>
                          :
                          <span className="far fa-eye"></span>
                      }
                    </button>
                  </div>
                </div>
              </div>

              <div className="div-submit">
                <button type="submit" className="btn btn-primary form-control">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <NotificationContainer />
      <Loader /> */}
    </div>
  );
};

export default Login;