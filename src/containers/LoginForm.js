import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { login } from '../actions/auth'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitLogin = this.submitLogin.bind(this)
  }

  submitLogin(values) {
    this.props.login(values.username, values.password)
  }

  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.props.handleSubmit(this.submitLogin)}>
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
}

LoginForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  login: React.PropTypes.func.isRequired,
}

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm)

export default connect(null, { login })(LoginReduxForm)
// { login } short hand of connect same argument is thunk
