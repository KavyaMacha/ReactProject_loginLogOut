import './index.css'

const Logout = ({onLogout}) => (
  <div className="logout-container">
    <button type="button" className="button" onClick={onLogout}>
      Logout
    </button>
  </div>
)

export default Logout
