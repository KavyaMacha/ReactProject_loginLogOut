import './index.css'

const Login = ({onLogin}) => (
  <div className="login-container">
    <button type="button" className="button" onClick={onLogin}>
      Login
    </button>
  </div>
)

export default Login
