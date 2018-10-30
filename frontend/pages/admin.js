import React, { Component } from 'react'
import firebase from 'firebase'
import axios from 'axios';
import 'isomorphic-unfetch'
import clientCredentials from '../credentials/client'

export default class Admin extends Component {
  static async getInitialProps ({req, query}) {
    const user = req && req.session ? req.session.decodedToken : null
    return { user }
  }

  constructor (props) {
    super(props)
    this.state = {
      user: this.props.user,
      error: '',
      createError: '',
      long: '',
      short: '',
      redirects: [],
    }

  }

  componentDidMount () {
    firebase.initializeApp(clientCredentials)

    // if (this.state.user) this.addDbListener()

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        return user.getIdToken()
          .then((token) => {
            // eslint-disable-next-line no-undef
            return fetch('/api/login', {
              method: 'POST',
              // eslint-disable-next-line no-undef
              headers: new Headers({ 'Content-Type': 'application/json' }),
              credentials: 'same-origin',
              body: JSON.stringify({ token })
            })
          }).then((res) => {
            if (res.status === 403) {
              this.setState({ user: null, error: 'Must be an @ocean.org email address. Please ensure you are logged out of other Google accounts before trying again.' })
            } else {
              this.getRedirects()
              this.setState({ user: user, error: '' })
            }
          })
      } else {
        this.setState({ user: null })
        // eslint-disable-next-line no-undef
        fetch('/api/logout', {
          method: 'POST',
          credentials: 'same-origin'
        })
      }
    })
  }

  handleLogin () {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  handleLogout () {
    firebase.auth().signOut()
  }

  removeRedirect = (short, i) => {
    axios.post('https://us-central1-ocean-wise-186900.cloudfunctions.net/removeRedirect', { short })
      .then(() => {
        var redirects = this.state.redirects;
        redirects = redirects.filter((x, j) => j !== i)
        this.setState({ redirects })
      })
  }

  getRedirects = () => {
    axios.get('https://us-central1-ocean-wise-186900.cloudfunctions.net/getAllRedirects')
      .then((res) => {
        const redirects = [];
        res.data.forEach((redirect, i) => {
          redirects.push(
            <tr style={{ textAlign: 'center' }} key={`redirect-${redirect.short}`}>
              <td><h4>{redirect.long}</h4></td>
              <td><h3>{redirect.short}</h3></td>
              <td><span>{redirect.clicks}</span></td>
              <td><button onClick={() => this.removeRedirect(redirect.short, i)}>Remove?</button></td>
            </tr>
          )
        })
        this.setState({ redirects })
      })
  }

  handleLong = (evt) => {
    this.setState({ long: evt.target.value })
  }
  handleShort = (evt) => {
    this.setState({ short: evt.target.value })
  }

  handleCreate = () => {
    const { long, short } = this.state;
    if ( !(/^(ftp|https?):\/\/[^ "]+$/g.test(long)) ) {
      this.setState({ createError: 'Long URL must be a valid URL '});
    } else {
      axios.post('https://us-central1-ocean-wise-186900.cloudfunctions.net/createRedirect', { long, short })
        .then((res) => {
          var redirects = this.state.redirects;
          redirects.push(
            <tr style={{ textAlign: 'center' }} key={`redirect-${short}`}>
              <td><h4>{long}</h4></td>
              <td><h3>{res.data}</h3></td>
              <td><span>0</span></td>
            </tr>
          )
          this.setState({ redirects, createError: '' })
          window.location.reload(true)
        })
    }
  }

  render () {
    const { user, error, redirects, createError } = this.state

    return (
      <div>
        <div style={{ marginBottom: 50, display: 'flex', justifyContent: 'center', flexDirection: 'column', maxWidth: 750, margin: '0 auto' }}>
          {user ? <button onClick={this.handleLogout}>Logout</button> : <button onClick={this.handleLogin}>Login</button>}
          { error !== '' ? <span style={{ color: 'red', textAlign: 'center' }}>{error}</span> : ''}
        </div>
        { user &&
          <div style={{ display: 'flex', justifyContent: 'center', margin: '50px auto', flexDirection: 'column', maxWidth: 750 }}>
            <label>
              The full URL to shorten (required):
              <input type="text" value={this.state.long} onChange={this.handleLong} />
            </label>
            <label>
              The short URL you want (optional; e.g., 'compost'):
              <input type="text" value={this.state.short} onChange={this.handleShort} />
            </label>
            <button onClick={this.handleCreate}>Shorten URL</button>
            <span style={{ color: 'red' }}>{createError}</span>
          </div>
        }
        { user &&
          <table style={{ width: '100%' }}>
            <tbody>
              <tr>
                <th style={{ width: '40%' }}>Long</th>
                <th>Short</th>
                <th>Clicks</th>
              </tr>
            </tbody>
            {redirects}
          </table>
        }
      </div>
    )
  }
}
