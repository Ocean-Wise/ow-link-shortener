import React from 'react';
import axios from 'axios';

export default class extends React.Component {
  static async getInitialProps({ query, pathname }) {
    console.log(query);
    return { query, pathname };
  }
  constructor(props) {
    super(props);
    this.state = {
      redirect: this.props.query
    };
  }

  componentDidMount() {
    window.location = this.state.redirect;
  }

  render () {
    console.log(this.state.redirect);
    return (
      <div>
        <h1>Redirect</h1>
        <p>
          {/[^/]*$/.exec(this.props.query)[0]}
        </p>
      </div>
    );
  }
}
