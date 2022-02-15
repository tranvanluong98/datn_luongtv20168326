import React from "react";
import { Row, Col } from "antd";
import Link from "next/link";

import FooterSubcribe from "./elements/FooterSubcribe";
import Container from "../other/Container";
import links from "../../data/footer-links.json";

function Footer({ containerType }) {
  return (
    <div className="footer">
      <div className="footer-top">
        <Container type={containerType}>
          <Row justify="center" gutter={30}>
            <Col className="gutter-row" span="24" sm={12} lg={8}>
              <div className="footer-top-item -col-one">
                <Link href="#">
                  <a>
                    <h1>K Ecommerce</h1>
                  </a>
                </Link>
                <p>Hanoi University of Science & Technology (HUST)</p>
                <ul>
                  <li>luongtv168326@sis.hust.edu.vn</li>
                  <li>(+84)356577666</li>
                </ul>
              </div>
            </Col>
            <Col className="gutter-row" span="24" sm={12} lg={8}>
              <div className="footer-top-item -col-two">
                <Row gutter={30}>
                  <Col className="gutter-row" span={12}>
                    <h5 className="footer-title">Information</h5>
                    <ul>
                      {links.information.map((item, index) => (
                        <li key={index}>
                          <Link href="#">
                            <a>{item.name}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <h5 className="footer-title">My account</h5>
                    <ul>
                      {links.account.map((item, index) => (
                        <li key={index}>
                          <Link href="#">
                            <a>{item.name}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col className="gutter-row" span="24" sm={18} lg={8}>
              <div className="footer-top-item -col-three">
                <h5 className="footer-title">Subscribe to our Newsletter</h5>
                <p>
                  Subscribe to our newsletter and get 10% off your first
                  purchase
                </p>
                <FooterSubcribe url="https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e" />
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/footer/payment.png"
                  }
                  alt="Payment methods"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <Container type={containerType}>
          <p>Copyright©2022 K Ecommerce All rights reserved</p>
        </Container>
      </div>
    </div>
  );
}

export default React.memo(Footer);