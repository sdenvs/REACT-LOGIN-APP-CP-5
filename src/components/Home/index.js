// Write your code here
import './index.css'
import {Component} from 'react'
import Message from '../Message'
import LoginButton from '../Login'
import LogoutButton from '../Logout'

class Home extends Component {
  state = {login: false}

  change = () => {
    const {login} = this.state
    if (login) {
      this.setState(() => ({login: false}))
    } else {
      this.setState(() => ({login: true}))
    }
  }

  render() {
    const {login} = this.state
    return (
      <div className="home">
        <div className="card">
          <Message login={login} />
          <div tabIndex={0} role="button" onClick={this.change}>
            {login ? LogoutButton : LoginButton}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
