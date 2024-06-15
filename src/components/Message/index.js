import './index.css'

const Message = ({isLoggedIn}) => (
  <div className="message">{isLoggedIn ? 'Welcome User' : 'Please Login'}</div>
)

export default Message
