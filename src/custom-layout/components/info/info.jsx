import React from "react"
import PropTypes from "prop-types"

export default class Info extends React.Component {

  static propTypes = {
    specActions: PropTypes.object.isRequired,
    specSelectors: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
  }

  render () {
    const {specSelectors, getComponent} = this.props

    const info = specSelectors.info()
    const title = info.get("title")
    const description = info.get("description")
    const Markdown = getComponent("Markdown")

    return (
      <div className="info">
        <hgroup className="main">
          <h2 className="title" >{ title }
          </h2>
        </hgroup>
        <div className="description">
          <Markdown source={ description } />
        </div>
      </div>
  )
  }
}
