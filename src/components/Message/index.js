// Write your code here
import './index.css'

const Welcome = props => {
  const {login} = props
  return login ? (
    <h1 className="heading">Welcome User</h1>
  ) : (
    <h1 className="heading">Please Login</h1>
  )
}

export default Welcome
