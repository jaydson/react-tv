import React from 'react'
import ReactTV from 'react-tv'

class App extends React.Component {
  render() {
    return (
      <div id='my-container'>
        Navigation
      </div>
    )
  }
}

ReactTV.render(<App/>, document.querySelector('#root'))
