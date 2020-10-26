import React from 'react'
import Typed from 'typed.js'
import history from '../history'
import KeyboardEventHandler from 'react-keyboard-event-handler'

export default class Home extends React.Component {
  componentDidMount() {
    const options = {
      strings: [
        `Welcome, ^300 Special Agent Q. ^700 <br>
        I’m Spymaster L. ^300 <br>
        Today ^300 we’ve got a top-secret mission. ^1000 <br>
        Hit ENTER to accept...`
      ],
      startDelay: 1000,
      typeSpeed: 70
    }
    this.typed = new Typed(this.el, options)
  }

  render() {
    return (
      <div>
        <KeyboardEventHandler
          handleKeys={['enter', 'return']}
          onKeyEvent={() => history.push('/levelOne')}
        />
        <br />
        <div className="text-editor-home">
          <div className="title-bar">
            <span className="title">🔒Confidential-File - bash - 80x24</span>
          </div>
          <div className="text-body-home">
            {'>> '}
            <span
              ref={el => {
                this.el = el
              }}
            />
            <span className="typed-cursor" />
          </div>
        </div>
      </div>
    )
  }
}
