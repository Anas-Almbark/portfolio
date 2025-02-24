import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { Link } from "react-router-dom";
export const Portfolio = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch(
          "https://anas-almbark-portfolio.free.nf/api/projects"
        );
        console.log(response);

        const data = await response.json();
        setPortfolioData(data);
        dataportfolio.projects = data.projects;
        dataportfolio.categories = data.categories;
        if (data.categories && data.categories.length > 0) {
          const visibleCategories = data.categories.filter(
            (category) => category.visible !== 0
          );
          if (visibleCategories.length > 0) {
            setSelectedCategory(visibleCategories[0].name);
          }
        }
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
      }
    };

    fetchPortfolioData();
  }, []);

  useEffect(() => {
    if (portfolioData) {
      const filtered = portfolioData.projects?.filter((project) => {
        if (!selectedCategory) return project.category.visible !== 0;
        return (
          project.category.visible !== 0 &&
          project.category.category_name === selectedCategory
        );
      });
      setFilteredProjects(filtered);
    }
  }, [selectedCategory, portfolioData]);

  const handleCategoryChange = (categoryName) => {
    setSelectedCategory(categoryName);
  };

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
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="row w-50 mb-5">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            {dataportfolio.categories
              ?.filter((category) => category.visible !== 0)
              .map((category, i) => {
                return (
                  <div key={category.name}>
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id={category.name}
                      autoComplete="off"
                      checked={
                        !selectedCategory
                          ? i === 0
                          : selectedCategory === category.name
                      }
                      onChange={() => handleCategoryChange(category.name)}
                    />
                    <label
                      className="btn text-white mx-3 text-bg-dark"
                      htmlFor={category.name}
                    >
                      {category.name}
                    </label>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="mb-5 row row-cols-1 row-cols-md-3 g-4">
          {filteredProjects && filteredProjects.length > 0 ? (
            filteredProjects.map((data, i) => {
              return (
                <div
                  className={`card mb-5 py-3 mx-3 ${
                    theme === "light" ? "bg-light" : "bg-dark"
                  }`}
                  key={i}
                >
                  <img
                    src={`https://anas-almbark-portfolio.free.nf/storage/${data.image}`}
                    className="card-img-top rounded"
                    alt={data.title}
                  />
                  <div className="card-body">
                    <span className="py-1 px-3 d-inline-block rounded-1 bg-danger mt-2 mb-3 text-white">
                      {data.category.category_name}
                    </span>
                    <h5 className="card-title ">{data.title}</h5>
                    <p className="card-text ">{data.fragment}</p>
                    <a
                      href={data.url_repo}
                      className="btn bg-info"
                      style={{ "margin-right": 10 }}
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                    {data.url_demo ? (
                      <a href={data?.url_demo} className="btn bg-danger">
                        <i className="fa-solid fa-eye"></i>
                      </a>
                    ) : (
                      ""
                    )}
                    <Link
                      to={`/portfolio/${data.id}`}
                      className="btn bg-secondary ml-3"
                      style={{ "margin-left": 10 }}
                    >
                      more details
                    </Link>
                    <div className="border-top mt-3 pt-2 px-2">
                      <span> {data.created_at} </span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-12 w-100 text-center">
              <h3 className="text-white">No projects found</h3>
            </div>
          )}
        </div>
      </Container>
    </HelmetProvider>
  );
};
