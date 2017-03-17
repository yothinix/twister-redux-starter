import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

const LoginForm = ({ handleSubmit, login }) => {
  const submitLogin = (values) => {
    login(values.username, values.password)
  }

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit(submitLogin)}>
        <div className="login-label">
          Log in with your username
      </div>
        <div className="form-group">
          <Field name="username" component="input" type="text" className="form-control" placeholder="Username" />
        </div>
        <div className="form-group">
          <Field name="password" component="input" type="password" className="form-control" placeholder="Password" />
        </div>
        <div className="form-group text-right">
          <button className="btn btn-default">Log in</button>
        </div>
      </form>
    </div>
  )
}

LoginForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  login: React.PropTypes.func.isRequired,
}

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm)
const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(login(username, password)),
})

export default connect(null, mapDispatchToProps)(LoginReduxForm)