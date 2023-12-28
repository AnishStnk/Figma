import React from "react";
import { Row, Col } from "react-bootstrap";
import "../Styles/categories.css";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import { Table } from "react-bootstrap";
import { MdArrowDropDown } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { IoIosArrowRoundDown } from "react-icons/io";
import { ImBin2 } from "react-icons/im";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import HeadNav from "../Layouts/Navbar";

const SubCategories = () => {
  const data = [
    {
      SINo: 1,
      name: "Recessed Fluorescent",
      type: "C",
      img: (
        <ImArrowRight
          style={{
            color: "#3153cd",
          }}
        />
      ),
    },
    {
      SINo: 2,
      name: "Surface Fluorescen",
      type: "C",
      img: (
        <ImArrowRight
          style={{
            color: "#3153cd",
          }}
        />
      ),
    },
    {
      SINo: 3,
      name: "Recessed Incandescent",
      type: "C",
      img: (
        <ImArrowRight
          style={{
            color: "#3153cd",
          }}
        />
      ),
    },
    {
      SINo: 4,
      name: "Surface Incandescent",
      type: "C",
      img: (
        <ImArrowRight
          style={{
            color: "#3153cd",
          }}
        />
      ),
    },
    {
      SINo: 5,
      name: "Recessed HO",
      type: "C",
      img: (
        <ImArrowRight
          style={{
            color: "#3153cd",
          }}
        />
      ),
    },
    {
      SINo: 6,
      name: "Surface HO",
      type: "C",
      img: (
        <ImArrowRight
          style={{
            color: "#3153cd",
          }}
        />
      ),
    },
    {
      SINo: 7,
      name: "Exit & Emergency",
      type: "C",
      img: (
        <ImArrowRight
          style={{
            color: "#3153cd",
          }}
        />
      ),
    },
    {
      SINo: 8,
      name: "Fans & Miscellaneous",
      type: "C",
      img: (
        <ImArrowRight
          style={{
            color: "#3153cd",
          }}
        />
      ),
    },
    {
      SINo: 9,
      name: "Spec Fixtures(Type A...)",
      type: "C",
      img: (
        <ImArrowRight
          style={{
            color: "#3153cd",
          }}
        />
      ),
    },
    {
      SINo: 10,
      name: "Fixture Connection",
      type: "C",
      img: (
        <ImArrowRight
          style={{
            color: "#3153cd",
          }}
        />
      ),
    },
  ];

  const project = [
    {
      SINO: 1,
      Icon: <IoMdArrowDropright />,
      name: "2''X4'' Drop-in-T-Bar(1/2''Flex)",
      size: "100M",
      qty: "-",
      img: (
        <ImBin2
          style={{
            color: "#3153cd",
          }}
        />
      ),
    },
    {
      SINO: 2,
      Icon: <IoMdArrowDropright />,
      name: "1''X4'' Surface Fluor Fixt",
      size: "-",
      qty: "120",
      img: (
        <ImBin2
          style={{
            color: "#3153cd",
          }}
        />
      ),
    },
    {
      SINO: 3,
      Icon: <IoMdArrowDropright />,
      name: "1/2'' EMT DC DD Connector",
      size: "-",
      qty: "270",
      img: (
        <ImBin2
          style={{
            color: "#3153cd",
          }}
        />
      ),
    },
    {
      SINO: 4,
      Icon: <IoMdArrowDropright />,
      name: "2''X4'' Drop-in-T-Bar(1''Flex)",
      size: "1200M",
      qty: "-",
      img: (
        <ImBin2
          style={{
            color: "#3153cd",
          }}
        />
      ),
    },
    {
      SINO: 5,
      Icon: <IoMdArrowDropright />,
      name: "3'' EMT DC SS Connector",
      size: "-",
      qty: "500",
      img: (
        <ImBin2
          style={{
            color: "#3153cd",
          }}
        />
      ),
    },
    {
      SINO: 6,
      Icon: <IoMdArrowDropright />,
      name: "2''X6'' Surface Fluor Fixt",
      size: "-",
      qty: "1200",
      img: (
        <ImBin2
          style={{
            color: "#3153cd",
          }}
        />
      ),
    },
  ];

  return (
    <div className="categories">
      <HeadNav />
      <section>
        <Row>
          <Col lg="1">
            <div className="Job">
              <i class="ri-arrow-go-back-line"></i>
              <div>
                <span style={{ color: "#fff" }}>Back to jobs</span>
              </div>
            </div>
            <div className="box">
              <i class="ri-menu-line"></i>
              <div>
                <span>Notes</span>
              </div>
            </div>
            <div className="takeoff">
              <i class="ri-menu-line"></i>
              <div>
                <span>Takeoff</span>
              </div>
            </div>
            <div className="box">
              <i class="ri-menu-line"></i>
              <div>
                <span>Extension</span>
              </div>
            </div>
            <div className="box">
              <i class="ri-menu-line"></i>
              <div>
                <span>DiLb</span>
              </div>
            </div>
            <div className="box">
              <i class="ri-menu-line"></i>
              <div>
                <span>IncLb</span>
              </div>
            </div>
            <div className="box">
              <i class="ri-menu-line"></i>
              <div>
                <span>LbFac</span>
              </div>
            </div>
            <div className="box">
              <i class="ri-menu-line"></i>
              <div>
                <span>LbEsc</span>
              </div>
            </div>
            <div className="box">
              <i class="ri-menu-line"></i>
              <div>
                <span>IndLb</span>
              </div>
            </div>
            <div className="box">
              <i class="ri-menu-line"></i>
              <div>
                <span>Sbcon</span>
              </div>
            </div>
            <div className="box">
              <i class="ri-menu-line"></i>
              <div>
                <span>Gen Exp</span>
              </div>
            </div>
            <div className="box">
              <i class="ri-menu-line"></i>
              <div>
                <span>Qt Mat</span>
              </div>
            </div>
            <div className="box">
              <i class="ri-menu-line"></i>
              <div>
                <span>Brk Dwn</span>
              </div>
            </div>
          </Col>
          <Col lg="5">
            <section>
              <div className="fixtures container">
                <div className="Title">
                  <div className="i">
                    <Link to="/categories">
                      <ImArrowLeft
                        style={{
                          color: "#000",
                        }}
                      />
                    </Link>
                  </div>
                  <h2>SubCategories</h2>
                </div>
                <div className="search">
                  <input placeholder="Search Sub Categories" />
                </div>
              </div>

              <div>
                <Table
                  responsive
                  bordered
                  className="no-borders-table"
                  style={{}}
                >
                  <thead>
                    <tr>
                      <th>SI No</th>
                      <th>Name</th>
                      <th>Type</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr key={index}>
                        <td>{item.SINo}</td>
                        <td>{item.name}</td>
                        <td>{item.type}</td>
                        <td>
                          <Link to="/assemblies">{item.img}</Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </section>
          </Col>
          <Col lg="6">
            <section>
              <Row>
                <Col lg="6">
                  <div className="fixtures container">
                    <div className="Title">
                      <h2>Job</h2>
                    </div>
                  </div>
                </Col>
                <Col lg="6">
                  <div className="fixtures container">
                    <div className="Title">
                      <span>Quote Status</span>
                      <div className="acceptSet">
                        Accepted <MdArrowDropDown />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <div className="luffy container">
                  <Col lg="6">
                    <div>
                      <div className="luffy">
                        <p>Job Name</p>
                        <h6>Test Project 1</h6>
                      </div>
                      <div className="luffy">
                        <p>Job Name</p>
                        <h6>#AB3265413</h6>
                      </div>
                      <div className="luffy">
                        <p>Unit</p>
                        <Row>
                          <Col lg="8">
                            <div className="metric">Metric</div>
                          </Col>
                          <Col lg="4">
                            <p>US</p>
                          </Col>
                        </Row>
                      </div>
                      <div className="luffy">
                        <p>Difficulty level</p>
                        <select className="high">
                          <option>High</option>
                        </select>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="job_details">
                      <button>Job Details</button>
                    </div>
                    <div className="job_details">
                      <button>Button 2</button>
                    </div>
                    <div>
                      <button>Button 3</button>
                    </div>
                  </Col>
                </div>
              </Row>
            </section>
            <div>
              <Row>
                <Col lg="4">
                  <div className="product">
                    <FontAwesomeIcon
                      className="FontAwesomeIcon"
                      icon={faSearch}
                    />
                    <input type="text" placeholder="Search Products" />
                  </div>
                </Col>
                <Col lg="4">
                  <Row>
                    <div className="sort">
                      <Col lg="6">
                        <div>
                          <p>Sort by</p>
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="name">
                          <p>name</p>
                        </div>
                      </Col>
                    </div>
                  </Row>
                </Col>
                <Col lg="4">
                  <div className="sort">
                    <div className="import">
                      <span>Import</span>
                      <IoIosArrowRoundDown />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <div>
                <Table
                  responsive
                  bordered
                  className="no-borders-table"
                  style={{}}
                >
                  <thead>
                    <tr>
                      <th>SI No</th>
                      <th>Name</th>
                      <th>Length</th>
                      <th>Quantity</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.map((item, index) => (
                      <tr key={index}>
                        <td>{item.Icon}</td>
                        <td>{item.SINO}</td>
                        <td>{item.name}</td>
                        <td>{item.size}</td>
                        <td>{item.qty}</td>
                        <td>{item.img}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default SubCategories;
