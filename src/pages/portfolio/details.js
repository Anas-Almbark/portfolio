import { useEffect, useState } from "react";
import "./details.css";
import { useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import DOMPurify from "dompurify";

const ProjectDetails = () => {
  const [projectData, setProjectData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch(
          `https://anas-almbark-portfolio.free.nf/api/projects`
        );
        const data = await response.json();
        // eslint-disable-next-line array-callback-return
        data.projects.map((e) => {
          if (+e.id === +id) setProjectData(e);
        });
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };
    fetchProjectData();
  }, [id]);
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          />
        </Helmet>
        <Row className="mb-3 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> {projectData.title} </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <div className="w-100 text-center img_hover_zoom">
              <img
                src={`https://anas-almbark-portfolio.free.nf/storage/${projectData.image}`}
                alt="img_project"
              />
            </div>
          </Col>
          <Col lg="12">
            <div className="about_wrapper">
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(projectData.description),
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export default ProjectDetails;
