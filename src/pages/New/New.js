import React, { useState } from "react";
import axios from "axios";

import PageTitle from "../../components/PageTitle";
import UserProfile from "../../components/UserProfile";
import Location from "../../components/Location";
import ImagesAdd from "../../components/ImagesAdd";
import DynamicFields from "../../components/DynamicFields";

const New = () => {
  // formData: Formun verilerini saklamak için kullanılan state değişkenidir. Bu nesne, formdaki her bir alanın değerini saklar.
  const [formData, setFormData] = useState({
    username: "", // Kullanıcının adını saklar.
    catPosition: "",
    email: "",
    phone: "",
    buildCategory: "",
    catBuySell: "",
    country: "",
    state: "",
    city: "",
    address: "",
    area: "",
    price: "",
    additionalInfo: "",
    images: [],
    roomCount: "",
    floor: "",
    floorCount: "",
    repair: "",
    landArea: "",
    buildType: "",
  });

  const [errors, setErrors] = useState({});

  // name: Kontrol edilmesi gereken form alanının adı.
  // value: Kontrol edilmesi gereken form alanının değeri.
  const validateInput = (name, value) => {
    switch (name) {
      case "username":
        if (!value) {
          return "Adınız daxil edilməlidir";
        }

        const usernamePattern = /^[a-zA-Z\səöüğıçşƏÖÜĞIÇŞ]*$/;
        if (!usernamePattern.test(value)) {
          return "Ad yalnız hərflərdən və boşluqlardan ibarət olmalıdır";
        }

        break;
      case "catPosition": // Example for radio button validation
        if (!value) {
          return "İstifadəçi kateqoriya mövqeyi seçilməlidir";
        }
        break;
      case "email":
        if (!value) {
          return "E-poçt adresiniz daxil edilməlidir";
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          return "E-poçt adresində xəta var. Yenidən cəhd edin!";
        }

        break;
      case "phone":
        if (!value) {
          return "Əlaqə nömrəniz daxil edilməldir";
        }

        const phonePattern = /^0\d{9}$/;
        if (!phonePattern.test(value)) {
          return "Telefon nömrəsi 0 ilə başlamalı və 10 rəqəmdən ibarət olmalıdır";
        }

        break;
      case "buildCategory":
        if (!value) {
          return "Kateqoriya seçin";
        }
        break;
      case "roomCount":
        if (!value) {
          return "Otaq sayı seçin";
        }

        const pricePattern5 = /^\d+$/;
        if (!pricePattern5.test(value)) {
          return "Otaq sayı yalnız rəqəmlərdən ibarət olmalıdır";
        }
        break;
      case "repair":
        if (!value) {
          return "Təmir durumunu seçin";
        }
        break;
      case "buildType":
        if (!value) {
          return "Binanın növünü seçin";
        }
        break;
      case "floor":
        if (!value) {
          return "Mərtəbə seçin";
        }

        const pricePattern3 = /^\d+$/;
        if (!pricePattern3.test(value)) {
          return "Mərtəbə yalnız rəqəmlərdən ibarət olmalıdır";
        }
        break;
      case "floorCount":
        if (!value) {
          return "Mərtəbə sayı seçin";
        }

        const pricePattern4 = /^\d+$/;
        if (!pricePattern4.test(value)) {
          return "Mərtəbə sayı yalnız rəqəmlərdən ibarət olmalıdır";
        }
        break;
      case "catBuySell":
        if (!value) {
          return "Boş buraxmayın";
        }
        break;
      case "country":
        if (!value) {
          return "Şəhər seçin";
        }
        break;
      case "address":
        if (!value) {
          return "Ünvan daxil edin";
        }

        const addressPattern = /^[.,\s\w\dəöüğıçşƏÖÜĞIÇŞ]*$/;
        if (!addressPattern.test(value)) {
          return "Address yalnız nokta, virgül, boşluq, metin və rəqəmlərdən ibarət olmalıdır";
        }
        break;
      case "area":
        if (!value) {
          return "Sahə boş buraxılmamalıdır";
        }

        const areaPattern = /^\d+$/;
        if (!areaPattern.test(value)) {
          return "Sahə yalnız rəqəmlərdən ibarət olmalıdır";
        }
        break;
      case "price":
        if (!value) {
          return "Qiymət yazın";
        }

        const pricePattern = /^\d+$/;
        if (!pricePattern.test(value)) {
          return "Qiymət yalnız rəqəmlərdən ibarət olmalıdır";
        }
        break;
      case "landArea":
        if (!value) {
          return "Torpaq sahəsini daxil edin";
        }

        const pricePattern2 = /^\d+$/;
        if (!pricePattern2.test(value)) {
          return "Torpaq sahəsi yalnız rəqəmlərdən ibarət olmalıdır";
        }
        break;
      case "images":
        if (value.length < 4) {
          return "Ən azı 4 şəkil əlavə edilməlidir";
        }
        if (value.length > 30) {
          return "Ən çox 30 şəkil əlavə edilə bilər";
        }
        break;
      default:
        return "";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validateInput(name, value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Final validation before submitting
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateInput(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit the form data
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "images") {
        formData[key].forEach((file) => {
          data.append("images[]", file);
        });
      } else {
        data.append(key, formData[key]);
      }
    });

    // try {
    //   await axios.post("YOUR_LARAVEL_API_URL", data);
    //   alert("Form submitted successfully");
    // } catch (error) {
    //   console.error("Error submitting form", error);
    // }
  };

  return (
    <section className="mt-3">
      <div className="container">
        <div className="row">
          <PageTitle title={"Elan Yerləşdir"} />
        </div>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          autoComplete="off"
        >
          <div className="row mt-4">
            <div className="col-12 col-xl-6 order-2 order-xl-1">
              <UserProfile
                formData={formData}
                handleChange={handleChange}
                errors={errors}
              />

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
                          value={formData.buildCategory}
                          onChange={handleChange}
                          name="buildCategory"
                        >
                          <option value="">Kateqoriya seçin</option>
                          <option value="newBuilding">Yeni tikili</option>
                          <option value="oldBuilding">Köhnə tikili</option>
                          <option value="villa">Ev / Villa</option>
                          <option value="garden">Bağ</option>
                          <option value="office">Ofis</option>
                          <option value="garage">Qaraj</option>
                          <option value="land">Torpaq</option>
                          <option value="object">Obyekt</option>
                        </select>
                        {errors.buildCategory && (
                          <span className="text-danger">
                            {errors.buildCategory}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="mb-2">
                        <select
                          className="form-select"
                          name="catBuySell"
                          value={formData.catBuySell}
                          onChange={handleChange}
                          id="catBuySell"
                        >
                          <option value=""> </option>
                          <option value="buy">satıram</option>
                          <option value="rent">kirayə verirəm</option>
                        </select>
                        {errors.catBuySell && (
                          <span className="text-danger">
                            {errors.catBuySell}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <DynamicFields
                      formData={formData}
                      handleChange={handleChange}
                      errors={errors}
                    />
                  </div>

                  <Location
                    formData={formData}
                    handleChange={handleChange}
                    errors={errors}
                    validateInput={validateInput}
                  />

                  <div className="mb-2">
                    <label htmlFor="address" className="form-label">
                      Ünvan <sup className="text-danger fs-6 top-0">*</sup>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      value={formData.address}
                      onChange={handleChange}
                      name="address"
                    />
                    {errors.address && (
                      <span className="text-danger">{errors.address}</span>
                    )}
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
                      value={formData.area}
                      onChange={handleChange}
                      name="area"
                      id="area"
                    />
                    {errors.area && (
                      <span className="text-danger">{errors.area}</span>
                    )}
                  </div>
                  <div className="mb-2">
                    <label htmlFor="price" className="form-label">
                      Qiymət <sup className="text-danger fs-6 top-0">*</sup>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="price"
                      value={formData.price}
                      onChange={handleChange}
                      name="price"
                    />
                    {errors.price && (
                      <span className="text-danger">{errors.price}</span>
                    )}
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
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <ImagesAdd formData={formData} errors={errors} />
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
