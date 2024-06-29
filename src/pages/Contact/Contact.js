import React from "react";
import Breadcrumb from "../../components/Breadcrumb";

const Contact = () => {
  return (
    <>
      <Breadcrumb item={"Əlaqə"} />

      <section className="px-md-5 mx-md-5 text-center text-lg-start mt-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-5 col-md-12 mb-0 mb-md-0">
              <h3 className="fw-bold mb-0">Bizimlə Əlaqə</h3>

              <p className="text-muted mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                quam sapiente molestiae.
              </p>

              <p className="fw-bold mb-0">Support:</p>

              <p className="mb-2">
                <a href="#" className="text-decoration-none">
                  + 800 123 456
                </a>
              </p>

              <p className="mb-4">
                Our technical support is available by phone or email from 11am
                to 11pm.
              </p>

              <p className="fw-bold mb-0">Sales:</p>

              <p className="mb-2">
                <a href="#" className="text-decoration-none">
                  + 900 123 456
                </a>
              </p>

              <p className="mb-4">
                Our sales team is available by phone or email from 11am to 11pm.
              </p>

              <p className="fw-bold mb-0">General inquiries:</p>

              <p className="mb-2">
                <a href="#" className="text-decoration-none">
                  info@mycompany.com
                </a>
              </p>
            </div>

            <div className="col-lg-7 col-md-12 mb-4 mb-md-0">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Adınız</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Soyadınız</label>
                  </div>
                </div>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">E-poçt</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Mövzu başlığı</label>
              </div>

              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  style={{ height: "214px" }}
                ></textarea>
                <label htmlFor="floatingTextarea">
                  Biz necə kömək edə bilərik?
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-info ms-0 mt-4 text-white"
                style={{
                  backgroundColor: "var(--main-color)",
                  borderColor: "var(--main-color)",
                }}
              >
                Göndər
                <i className="far fa-paper-plane ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
