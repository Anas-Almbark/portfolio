import React, { useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataabout, meta, skills, whyMe, lastBite } from "../../content_option";

export const About = () => {
  let theme = localStorage.getItem("theme");
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            {skills.map((data, i) => {
              return theme === "dark" ? (
                <div key={i} className="p-3 bg-dark rounded mx-2">
                  <span>{data}</span>
                </div>
              ) : (
                <div key={i} className="p-3 bg-light rounded mx-2">
                  <span>{data}</span>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Why me ? </h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {whyMe.map((data, i) => {
                  return (
                    <tr key={i}>
                      <td>{data}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">The Last Bite</h3>
          </Col>
          <Col lg="7">
            {lastBite.map((data, i) => {
              return (
                <div className="py-4" key={i}>
                  {data}
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
