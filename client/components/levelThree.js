import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Axios from 'axios'
import CodeMirror from 'react-codemirror'
import SQL from '../../node_modules/codemirror/mode/sql/sql.js'

/**
 * COMPONENT
 */
class LevelThree extends React.Component {
  constructor() {
    super()
    this.state = {
      code: ''
    }
    this.updateCode = this.updateCode.bind(this)
    this.createTable = this.createTable.bind(this)
  }

  updateCode(newCode) {
    this.setState({code: newCode})
  }

  async createTable() {
    console.log('code: ', this.state.code)
    let {data} = await Axios.get(`/api/suspects/${this.state.code}`, {
      params: this.state.code
    })
    console.log('rows: ', data[1].rows)
    console.log('columns: ', data[1].fields)
  }

  render() {
    const options = {lineNumbers: true}
    return (
      <div>
        <h3>This is Level Three</h3>
        <CodeMirror
          value={this.state.code}
          onChange={this.updateCode}
          options={options}
          mode={SQL}
        />
        <button type="submit" onClick={this.createTable}>
          Submit Query!
        </button>
      </div>
    )
  }
}

export default LevelThree