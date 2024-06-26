import React from "react";

const New = () => {
  return (
    <section className="mt-3">
      <div className="container">
        <div className="row">
          <h3>Elan Yerləşdir</h3>
        </div>
        <form
          action=""
          method="POST"
          encType="multipart/form-data"
          autoComplete="off"
        >
          <div className="row mt-4">
            <div className="col-12 col-xl-6 order-2 order-xl-1">
              <div className="card text-dark bg-light mb-3">
                <div className="card-header">İstifadəçi Məlumatları</div>
                <div className="card-body">
                  <div className="mb-2">
                    <label htmlFor="username" className="form-label">
                      Əlaqədar şəxs
                      <sup className="text-danger fs-6 top-0">*</sup>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      value=""
                      required
                    />
                    <span className="text-danger">Ad daxil edilməlidir</span>
                  </div>
                  <div className="mb-2">
                    <div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="catPosition"
                          id="inlineRadio1"
                          value="user"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio1"
                        >
                          Öz elanımı yerləşdirirəm
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="catPosition"
                          id="inlineRadio2"
                          value="agent"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio2"
                        >
                          Mən vasitəçiyəm (agent)
                        </label>
                      </div>
                    </div>
                    <span className="text-danger">Sahə seçin</span>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="email" className="form-label">
                      E-poçt <sup className="text-danger fs-6 top-0">*</sup>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      value=""
                      name="email"
                      required
                    />
                    <div id="emailHelp" className="form-text">
                      E-poçtunuz heç bir halda qarşı tərəfə göstərilməyəcək.
                    </div>
                    <span className="text-danger">E-poçt daxil edilməldir</span>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="phone" className="form-label">
                      Telefon
                      <sup className="text-danger fs-6 top-0">*</sup>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      value=""
                      name="phone"
                      required
                    />
                    <span className="text-danger">
                      Əlaqə nömrəsi daxil edilməldir
                    </span>
                  </div>
                </div>
              </div>
              <p className="mb-0 w-75">
                Elan yerləşdirərək, Siz bina.az-ın
                <a href="#"> İstifadəçi razılaşması</a> ilə razı olduğunuzu
                təsdiq edirsiniz.
              </p>
              <button type="submit" className="btn btn-success mt-3">
                <img
                  src="assets/img/icons/loading.gif"
                  width="20"
                  style={{ display: "none" }}
                />
                Elan Yerləşdir
              </button>
            </div>
            <div className="col-12 col-xl-6 order-1 order-xl-2">
              <div className="card text-dark bg-light mb-3">
                <div className="card-header">Yeni Elan</div>
                <div className="card-body">
                  <div className="row">
                    <label htmlFor="buildCategory" className="form-label">
                      Mən <sup className="text-danger fs-6 top-0">*</sup>
                    </label>
                    <div className="col-12 col-md-6">
                      <div className="mb-2">
                        <select
                          className="form-select"
                          id="buildCategory"
                          value=""
                          name="buildCategory"
                          required
                        >
                          <option value="" selected>
                            Kateqoriya seçin
                          </option>
                          <option value="newBuilding">Yeni tikili</option>
                          <option value="oldBuilding">Köhnə tikili</option>
                          <option value="villa">Ev / Villa</option>
                          <option value="garden">Bağ</option>
                          <option value="office">Ofis</option>
                          <option value="garage">Qaraj</option>
                          <option value="land">Torpaq</option>
                          <option value="object">Obyekt</option>
                        </select>
                        <span className="text-danger">Kateqoriya seçin</span>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="mb-2">
                        <select
                          className="form-select"
                          name="catBuySell"
                          value=""
                          id="catBuySell"
                          required
                        >
                          <option value="buy">satıram</option>
                          <option value="rent">kirayə verirəm</option>
                        </select>
                        <span className="text-danger">Boş buraxmayın</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <div className="mb-2">
                        <label htmlFor="country" className="form-label">
                          Şəhər
                          <sup className="text-danger fs-6 top-0">*</sup>
                        </label>
                        <select
                          className="form-select"
                          name="country"
                          value=""
                          id="country"
                          required
                        >
                          <option value="">Şəhər seçin</option>
                        </select>
                        <span className="text-danger">Şəhər seçin</span>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="mb-2">
                        <label htmlFor="state" className="form-label">
                          Rayon
                          <sup className="text-danger fs-6 top-0">*</sup>
                        </label>
                        <select
                          className="form-select"
                          id="state"
                          value=""
                          name="state"
                          disabled
                          required
                        >
                          <option value="">Rayon seçin</option>
                        </select>
                        <span className="text-danger">Rayon seçin</span>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="mb-2">
                        <label htmlFor="city" className="form-label">
                          Qəsəbə
                        </label>
                        <select
                          className="form-select"
                          id="city"
                          value=""
                          name="email"
                          disabled
                        >
                          <option value="">Qəsəbə seçin</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="address" className="form-label">
                      Ünvan <sup className="text-danger fs-6 top-0">*</sup>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      value=""
                      name="address"
                      required
                    />
                    <span className="text-danger">Ünvan daxil edin</span>
                  </div>
                  <div id="hidden_section" style={{ display: "none" }}></div>
                  <div className="mb-2">
                    <label htmlFor="area" className="form-label">
                      Sahə <sup className="text-danger fs-6 top-0">*</sup> m
                      <sup>3</sup>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value=""
                      name="area"
                      id="area"
                      required
                    />
                    <span className="text-danger">
                      Sahə boş buraxılmamalıdır
                    </span>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="price" className="form-label">
                      Qiymət <sup className="text-danger fs-6 top-0">*</sup>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="price"
                      value=""
                      name="price"
                      required
                    />
                    <span className="text-danger">Qiymət yazın</span>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Əlavə Məlumat
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="7"
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="images" className="form-label">
                      Şəkillər
                      <sup className="text-danger fs-6 top-0">*</sup>
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="images"
                      name="images[]"
                      multiple
                      onchange="image_select()"
                    />
                    <span className="text-danger">
                      Ən az 3 ədəd şəkil seçilməlidir
                    </span>
                  </div>
                  <ul className="add-img" id="preview_image"></ul>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default New;
