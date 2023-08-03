import st from "../../../assets/stylesheet/AdminStyle.module.scss";
import { Col } from "react-bootstrap";
import {
  romanImage,
  wifi,
  socket,
  large,
  Quite,
  Small,
  outside_dining,
  table,
  Accessibility,
} from "../../../assets/images";
import cx from "./CafeDescription.module.scss";
import { HiOutlineClock } from "react-icons/hi";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { VscGlobe } from "react-icons/vsc";
import { AiOutlineFilePdf, AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const CafeDescription = () => {
  const navigate = useNavigate();
  return (
    <section className={` ${st.pageWrapper}`}>
      <div className={`${st.pageWrapperInside}`}>
        <Col className={cx.buttonsContainer}>
          <button
            type="button"
            onClick={() => {
              navigate("/admin");
            }}
          >
            <AiOutlineHome />
          </button>
          /
          <button
            type="button"
            onClick={() => {
              navigate("/admin/cafes");
            }}
          >
            Cafes
          </button>
          /
          <button type="button" className={cx.active}>
            James Coffee &Brews
          </button>
        </Col>
        <Col md={12} sm={12} className={`${cx.cafeDescriptionContainer}`}>
          <div className={`${cx.imageContainer}`}>
            <Col lg={6} sm={12}>
              <img src={romanImage} alt="" width="100%" />
            </Col>
            <Col lg={6} sm={12} className={`${cx.content_detail} `}>
              <div className={`${cx.contentHeading}`}>
                <div className={`d-flex  justify-content-between`}>
                  <h2> James Coffee &Brews</h2>
                  <p style={{ margin: "7px 20px", minWidth: "95px" }}>
                    <AiOutlineFilePdf
                      style={{
                        fontSize: "18px",
                        color: "#878787",
                        margin: "0 5px 5px 3px",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#878787",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      View Menu
                    </span>
                  </p>
                </div>
                <p>Greater Boston, Boston .15 km </p>
              </div>

              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#878787",
                }}
              >
                <p style={{ marginBottom: "5px" }}>
                  <HiOutlineClock
                    style={{ fontSize: "18px", marginRight: "5px" }}
                  />
                  <span>09:00 - 19:00</span>
                </p>
                <p style={{ marginBottom: "5px" }}>
                  <MdOutlinePermPhoneMsg
                    style={{ fontSize: "18px", marginRight: "5px" }}
                  />
                  <span>+43 663 302 192</span>
                </p>
                <p style={{ marginBottom: "5px" }}>
                  <VscGlobe style={{ fontSize: "18px", marginRight: "5px" }} />
                  <span>Jamescoffeebrew.com</span>
                </p>
              </div>
            </Col>
          </div>

          <hr />
          <Col lg={12} className={`${cx.about_detail} my-3`}>
            <div>
              <h3>About</h3>
              <p>
                James Brews & Coffee is a cafe is designed with the modern,
                mobile workforce in mind. We provide a cozy, welcoming
                atmosphere where you can work comfortably for hours on end. We
                understand that working remotely can be a challenge
              </p>

              <ul>
                <li>
                  Free Wi-Fi: Stay connected with high-speed internet access
                  throughout the cafe.
                </li>
                <li>
                  ower Outlets: We have plenty of outlets available for you to
                  charge your devices.
                </li>
                <li>Comfortable Seating: Choose from a variety of seating</li>
              </ul>
            </div>
          </Col>
          <hr />
          <Col lg={12} className={`${cx.top_amenties} mt-4`}>
            <h3> Top Amenities</h3>

            <ul className="">
              <li>
                <img src={wifi} />
                <span> 5G Wifi </span>
              </li>
              <li>
                <img src={socket} />
                <span>Fast charging sockets</span>
              </li>
              <li>
                <img src={outside_dining} alt="" />
                <span> Outside dining</span>
              </li>

              <li>
                <img src={Small} />
                <span> Small Groups</span>
              </li>
              <li>
                <img src={large} />
                <span>Large Groups</span>
              </li>
              <li>
                <img src={table} />
                <span>Big Tables</span>
              </li>
              {/* 
              <li>
                <img src={free} />
                <span> Free parking</span>
              </li> */}
              <li>
                <img src={Accessibility} />
                <span> Accessibility</span>
              </li>
              <li>
                <img src={Quite} />
                <span>Quiet Vibe</span>
              </li>
            </ul>
          </Col>
        </Col>
      </div>
    </section>
  );
};

export default CafeDescription;
