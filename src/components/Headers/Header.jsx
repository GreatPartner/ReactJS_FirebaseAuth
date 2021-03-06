/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

import { connect } from "react-redux";
import addStateCardAction from "../../actions/addStatCardAction";
import getAllStatCardAction from "../../actions/getAllStatCardsAction";


// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col, Button } from "reactstrap";

class Header extends React.Component {
  componentDidMount() {
    this.props.getAllStatCardAction();
  }
  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container>
            <Row>
              <Col lg="6" xl="3">
                <Button color="primary" onClick={() => this.props.addStateCardAction(
                  "Performance", "49,65%", "fas fa-percent", "bg-info text-white rounded-circle shadow",
                  "fas fa-arrow-up", "text-success",
                  "12%",
                  "Since last month"
                )} >Add stat card</Button>
              </Col>
            </Row>
          </Container><br />
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                { 
                this.props.statCardState && this.props.statCardState.statCardState && this.props.statCardState.statCardState.map(
                  (prop, key) => {

                    return (
                      <Col lg="6" xl="3" key={key}>
                        <Card className="card-stats mb-4 mb-xl-0">
                          <CardBody>
                            <Row>
                              <div className="col">
                                <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                                  {prop.statName}
                                </CardTitle>
                                <span className="h2 font-weight-bold mb-0">
                                  {prop.statDescription}
                                </span>
                              </div>
                              <Col className="col-auto">
                                <div className={"icon icon-shape " + prop.statIconColor}>
                                  <i className={prop.statIcon}></i>
                                </div>
                              </Col>
                            </Row>
                            <p className="mt-3 mb-0 text-muted text-sm">
                              <span className={"mr-2" + prop.statFooterIconstate}>
                                <i className={prop.statFooterIcon}></i>
                                {prop.statFooterPercentage}
                              </span>
                              <span className="text-nowrap">
                                {prop.statFooterText}
                              </span>
                            </p>
                          </CardBody>
                        </Card>
                      </Col>

                    )
                  }
                )
                }
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  getAllStatCardAction: () => dispatch(getAllStatCardAction()), addStateCardAction: (
    statName,
    statDescription,
    statIcon,
    statIconColor,
    statFooterIcon,
    statFooterIconstate,
    statFooterPercentage,
    statFooterText
  ) => dispatch(
    addStateCardAction(
      statName,
      statDescription,
      statIcon,
      statIconColor,
      statFooterIcon,
      statFooterIconstate,
      statFooterPercentage,
      statFooterText
    )
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
