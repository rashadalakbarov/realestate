import React, { useState } from "react";

const ImagesAdd = ({ handleImageChange }) => {
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
    handleImageChange(files);
  };

  return (
    <div className="mb-3">
      <label htmlFor="images" className="form-label">
        Şəkillər
        <sup className="text-danger fs-6 top-0">*</sup>
      </label>
      <input
        className="form-control"
        type="file"
        id="images"
        name="images"
        multiple
        onChange={handleFileChange}
      />
      <ul className="add-img" id="preview_image">
        {imagePreviews.map((preview, index) => (
          <li key={index}>
            <img src={preview} alt={`preview-${index}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImagesAdd;
