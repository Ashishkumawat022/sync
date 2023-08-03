import st from "../../../../assets/stylesheet/AdminStyle.module.scss";
import cx from "./AddBlog.module.scss";
import { Col } from "react-bootstrap";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { profile_icon } from "../../../../assets/images";
import { FaUpload } from "react-icons/fa";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  return (
    <section className={`${st.pageWrapper}`}>
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
              navigate("/admin/blogs");
            }}
          >
            Blogs
          </button>
          /
          <button type="button" className={cx.active}>
            Blog 1
          </button>
        </Col>

        <Col md={12} className={cx.addBlogContainer}>
          <div className={`d-flex align-items-center ${cx.userDetails}`}>
            <div
              className={`d-flex flex-column align-items-center ${cx.userProfile}`}
            >
              <img src={profile_icon} />
              <div className={cx.uploadBtnWrapper}>
                <button className={cx.btn}>
                  <FaUpload style={{ color: "#ffffffba", fontSize: "14px" }} />
                </button>
                <input type="file" name="myfile" />
              </div>
            </div>

            <div>
              <div className={cx.authorName}>
                <label htmlFor="">Author Name</label>
                <input type="text" placeholder="Enter name here" />
              </div>
              <div className={cx.authorName}>
                <label htmlFor="">Author Description</label>
                <input type="text" placeholder="Enter here" />
              </div>
              <div className={`d-flex ${cx.authorName}`}>
                <label htmlFor="">Publish Date</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date: any) => setStartDate(date)}
                />
              </div>
            </div>
          </div>

          <div className={`${cx.postTitle}`}>
            <textarea
              name=""
              id=""
              rows={1}
              placeholder="Post Tilte"
            ></textarea>
          </div>
          {/* <div>
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Description"
            ></textarea>
          </div> */}
          <div>
            <h6>Description</h6>
            <div>
              <Editor
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
              />
            </div>
            <div className={`d-flex justify-content-end   `}>
              <button type="button" className="btn btn-success m-2">
                Save
              </button>
              <button type="button" className="btn btn-secondary m-2">
                Cancel
              </button>
            </div>
          </div>
        </Col>
      </div>
    </section>
  );
};

export default AddBlog;
