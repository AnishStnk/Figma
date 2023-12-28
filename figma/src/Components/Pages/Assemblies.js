import { React, useState } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import "../Styles/categories.css";
import { ImArrowLeft } from "react-icons/im";
import { Table } from "react-bootstrap";
import { MdArrowDropDown } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { IoIosArrowRoundDown } from "react-icons/io";
import { ImBin2 } from "react-icons/im";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import HeadNav from "../Layouts/Navbar";
import { FaPlusCircle, FaPencilAlt } from "react-icons/fa";

const Assemblies = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleImgClick = (item) => {
    setShowPopup(true);
  };
  const data = [
    {
      SINo: 1,
      name: "2X4''Drop-In-T-Bar(1/2'' Flex)",
      type: "A",
      img: (
        <FaPlusCircle
          style={{
            color: "#038a00",
          }}
        />
      ),
    },
    {
      SINo: 2,
      name: "1X4''Drop-In-T-Bar(1/2'' Flex)",
      type: "A",
      img: (
        <FaPlusCircle
          style={{
            color: "#038a00",
          }}
        />
      ),
    },
    {
      SINo: 3,
      name: "2X4''Drop-In-T-Bar(14/2''BX)",
      type: "A",
      img: (
        <FaPlusCircle
          style={{
            color: "#038a00",
          }}
        />
      ),
    },
    {
      SINo: 4,
      name: "1X4'' Drop-In-T-Bar(14/2''BX)",
      type: "A",
      img: (
        <FaPlusCircle
          style={{
            color: "#038a00",
          }}
        />
      ),
    },
    {
      SINo: 5,
      name: "2X2'' Drop-In-T-Bar(14/2''BX)",
      type: "A",
      img: (
        <FaPlusCircle
          style={{
            color: "#038a00",
          }}
        />
      ),
    },
    {
      SINo: 6,
      name: "2X4'' Drop-In-T-Bar(12/2''BX)",
      type: "A",
      img: (
        <FaPlusCircle
          style={{
            color: "#038a00",
          }}
        />
      ),
    },
    {
      SINo: 7,
      name: "1X4''Drop-In-T-Bar(12/2''BX)",
      type: "A",
      img: (
        <FaPlusCircle
          style={{
            color: "#038a00",
          }}
        />
      ),
    },
    {
      SINo: 8,
      name: "2X4''Drop-In-T-Bar(12/2''BX)",
      type: "A",
      img: (
        <FaPlusCircle
          style={{
            color: "#038a00",
          }}
        />
      ),
    },
    {
      SINo: 9,
      name: "1X4''Drop-In-T-Bar(14/2''TECH)",
      type: "A",
      img: (
        <FaPlusCircle
          style={{
            color: "#038a00",
          }}
        />
      ),
    },
    {
      SINo: 10,
      name: "1X4''Drop-In-T-Bar(12/2''TECH)",
      type: "A",
      img: (
        <FaPlusCircle
          style={{
            color: "#038a00",
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
                    <Link to="/subcategories">
                      <ImArrowLeft
                        style={{
                          color: "#000",
                        }}
                      />
                    </Link>
                  </div>
                  <h2>Assemblies</h2>
                </div>
                <div className="search">
                  <input placeholder="Search Assemblies" />
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
                          <div
                            className="popup-trigger"
                            onClick={() => handleImgClick(item)}
                          >
                            {item.img}
                          </div>
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
        <Modal size="lg" show={showPopup} onHide={() => setShowPopup(false)}>
          <Modal.Header closeButton>
            <Modal.Title className="popup_title">
              <div>
                <h4>Add Assembly To The Project</h4>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="popup_div container">
              <div>
                <p>Assembly Name</p>
              </div>
              <div className="T-bar">
                <h6>2X4'' Drop-In T-Bar(1/2''Flex)</h6>
              </div>
            </div>
            <div>
              <Row>
                <Col lg="6">
                  <div className="popup_div">
                    <p>Count</p>
                    <input type="text" placeholder="1250" disabled={true} />
                  </div>
                </Col>
                <Col lg="6">
                  <div className="popup_div">
                    <p>Length in M</p>
                    <input type="text" placeholder="1250" disabled={true} />
                  </div>
                </Col>
              </Row>
            </div>
            <div className="popup_assembly">
              <p>Assembly Description</p>
              <Table responsive bordered className="bordered-table">
                <thead>
                  <tr>
                    <th>SI No</th>
                    <th>Discription</th>
                    <th>Quantity</th>
                    <th>Fct 1</th>
                    <th>Fct 2</th>
                    <th>Catalog Number</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>4X1 1/2'' SQ Box 1/2'' KO</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>32321AA15</td>
                    <td>
                      <FaPencilAlt />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>4'' SQ Blank Cover</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>32321AA15</td>
                    <td>
                      <FaPencilAlt />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="popup_btn container">
              <Row>
                <Col lg="6">
                  <div>
                    <Button className="popup_btn1" variant="outline-primary">
                      Cancel
                    </Button>
                  </div>
                </Col>
                <Col lg="6">
                  <div>
                    <Button className="popup_btn1" variant="primary">
                      Add
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Modal.Body>
        </Modal>
      </section>
    </div>
  );
};

export default Assemblies;
