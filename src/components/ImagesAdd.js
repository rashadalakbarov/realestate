import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const ImagesAdd = ({ formData, errors }) => {
  const [images, setImages] = useState(formData.images || []);
  const [localErrors, setLocalErrors] = useState("");

  const [errorsData, setErrorsData] = useState({ ...errors });

  useEffect(() => {
    // handleChange({ target: { name: "images", value: images } });
    localStorage.setItem("images", JSON.stringify(images));

    if (images.length > 3) {
      setErrorsData("");
    }
  }, [images]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
    const maxFileSize = 1024 * 1024 * 5; // 5 MB
    let newImages = [];
    let invalidFiles = [];
    let oversizedFiles = [];
    let duplicateFiles = [];

    files.forEach((file) => {
      if (!validImageTypes.includes(file.type)) {
        invalidFiles.push(file.name);
      } else if (file.size > maxFileSize) {
        oversizedFiles.push(file.name);
      } else if (images.some((img) => img.file.name === file.name)) {
        duplicateFiles.push(file.name);
      } else {
        newImages.push({ file, id: uuidv4() });
      }
    });

    if (invalidFiles.length > 0) {
      setLocalErrors(
        `Bu fayl vəya fayllar şəkil formatında deyil: ${invalidFiles.join(
          ", "
        )}`
      );
    } else if (oversizedFiles.length > 0) {
      setLocalErrors(
        `Şəkillərin ölçüsü 5 MB-dan çoxdur: ${oversizedFiles.join(", ")}`
      );
    } else if (duplicateFiles.length > 0) {
      setLocalErrors(
        `Bu şəkil vəya şəkillər əlavə edilib: ${duplicateFiles.join(", ")}`
      );
    } else {
      setLocalErrors("");
      // formData((prevData) => ({ ...prevData, images: files }));
    }

    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleRemoveImage = (id) => {
    setImages((prevImages) => prevImages.filter((img) => img.id !== id));

    setErrorsData("Ən azı 4 şəkil əlavə edilməlidir");
  };

  const renderImages = () => {
    return images.map((image) => (
      <div key={image.id} className="col-12 col-md-4 col-lg-3 mb-2">
        <div className="position-relative">
          <img
            src={URL.createObjectURL(image.file)}
            alt={image.file.name}
            className="img-fluid rounded"
          />
          <button
            type="button"
            className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2"
            onClick={() => handleRemoveImage(image.id)}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="form-group">
      <label htmlFor="images">
        Şəkillər <sup className="text-danger fs-6 top-0">*</sup>
      </label>
      <input
        type="file"
        name="images"
        id="images"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        className="form-control"
      />
      {errors && errors.images && errorsData && (
        <>
          <span className="text-danger">{errors.images}</span>
          <br />
        </>
      )}
      {localErrors && <span className="text-danger">{localErrors}</span>}

      {images.length > 0 && <div className="row mt-2">{renderImages()}</div>}
    </div>
  );
};

export default ImagesAdd;
