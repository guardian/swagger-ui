import React from "react"
import PropTypes from "prop-types"

export default class CustomLayout extends React.Component {

  static propTypes = {
    getComponent: PropTypes.func.isRequired
  }

  render() {
    let { getComponent } = this.props

    let Container = getComponent("Container")
    let Row = getComponent("Row")
    let Col = getComponent("Col")

    const Info = getComponent("Info", true)
    const Operations = getComponent("operations", true)

    return (

      <Container className='swagger-ui'>
        <Row>
          {Info ? <Info /> : null}
          <Col mobile={12} desktop={12} >
            <Operations/>
          </Col>
        </Row>
      </Container>
    )
  }

}
