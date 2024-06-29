import React from "react";

const DynamicFields = ({ formData, handleChange, errors }) => {
  const isRequired = (field) => {
    return (
      ((formData.buildCategory === "newBuilding" ||
        formData.buildCategory === "oldBuilding" ||
        formData.buildCategory === "villa" ||
        formData.buildCategory === "garden" ||
        formData.buildCategory === "office") &&
        field !== "landArea" &&
        field !== "buildType") ||
      (field === "landArea" &&
        (formData.buildCategory === "villa" ||
          formData.buildCategory === "garden")) ||
      (field === "buildType" && formData.buildCategory === "office")
    );
  };

  return (
    <>
      {(formData.buildCategory === "newBuilding" ||
        formData.buildCategory === "oldBuilding" ||
        formData.buildCategory === "villa" ||
        formData.buildCategory === "garden" ||
        formData.buildCategory === "office") && (
        <div className="col-12 col-md-4">
          <div className="mb-2">
            <label htmlFor="roomCount" className="form-label">
              Otaq Sayı{" "}
              {isRequired("roomCount") && (
                <sup className="text-danger fs-6 top-0">*</sup>
              )}
            </label>
            <input
              type="text"
              className="form-control"
              id="roomCount"
              name="roomCount"
              value={formData.roomCount}
              onChange={handleChange}
              required={isRequired("roomCount")}
            />
            {errors.roomCount && (
              <span className="text-danger">{errors.roomCount}</span>
            )}
          </div>
        </div>
      )}

      {(formData.buildCategory === "newBuilding" ||
        formData.buildCategory === "oldBuilding") && (
        <div className="col-12 col-md-4">
          <div className="mb-2">
            <label htmlFor="floor" className="form-label">
              Mərtəbə{" "}
              {isRequired("floor") && (
                <sup className="text-danger fs-6 top-0">*</sup>
              )}
            </label>
            <input
              type="text"
              className="form-control"
              id="floor"
              name="floor"
              value={formData.floor}
              onChange={handleChange}
              required={isRequired("floor")}
            />
            {errors.floor && (
              <span className="text-danger">{errors.floor}</span>
            )}
          </div>
        </div>
      )}

      {(formData.buildCategory === "newBuilding" ||
        formData.buildCategory === "oldBuilding") && (
        <div className="col-12 col-md-4">
          <div className="mb-2">
            <label htmlFor="floorCount" className="form-label">
              Mərtəbə Sayı{" "}
              {isRequired("floorCount") && (
                <sup className="text-danger fs-6 top-0">*</sup>
              )}
            </label>
            <input
              type="text"
              className="form-control"
              id="floorCount"
              name="floorCount"
              value={formData.floorCount}
              onChange={handleChange}
              required={isRequired("floorCount")}
            />
            {errors.floorCount && (
              <span className="text-danger">{errors.floorCount}</span>
            )}
          </div>
        </div>
      )}

      {(formData.buildCategory === "villa" ||
        formData.buildCategory === "garden") && (
        <div className="col-12 col-md-4">
          <div className="mb-2">
            <label htmlFor="landArea" className="form-label">
              Torpaq Sahəsi{" "}
              {isRequired("landArea") && (
                <sup className="text-danger fs-6 top-0">*</sup>
              )}{" "}
              sot
            </label>
            <input
              type="text"
              className="form-control"
              id="landArea"
              name="landArea"
              value={formData.landArea}
              onChange={handleChange}
              required={isRequired("landArea")}
            />
            {errors.landArea && (
              <span className="text-danger">{errors.landArea}</span>
            )}
          </div>
        </div>
      )}

      {formData.buildCategory === "office" && (
        <div className="col-12 col-md-4">
          <div className="mb-2">
            <label htmlFor="buildType" className="form-label">
              Bina Növü
              {isRequired("buildType") && (
                <sup className="text-danger fs-6 top-0">*</sup>
              )}
            </label>
            <select
              className="form-select"
              name="buildType"
              id="buildType"
              value={formData.buildType}
              onChange={handleChange}
              required={isRequired("buildType")}
            >
              <option value=""></option>
              <option value="0">Biznes mərkəzi</option>
              <option value="1">Ev / Mənzil</option>
              <option value="2">Villa</option>
            </select>
            {errors.buildType && (
              <span className="text-danger">{errors.buildType}</span>
            )}
          </div>
        </div>
      )}

      {(formData.buildCategory === "newBuilding" ||
        formData.buildCategory === "oldBuilding" ||
        formData.buildCategory === "villa" ||
        formData.buildCategory === "garden" ||
        formData.buildCategory === "object" ||
        formData.buildCategory === "office") && (
        <div className="col-12">
          <div className="mb-2">
            <label htmlFor="repair" className="form-label">
              Təmir
              {isRequired("repair") && (
                <sup className="text-danger fs-6 top-0">*</sup>
              )}
            </label>
            <select
              className="form-select"
              name="repair"
              id="repair"
              value={formData.repair}
              onChange={handleChange}
              required={isRequired("repair")}
            >
              <option value=""></option>
              <option value="0">Təmirsiz</option>
              <option value="1">Təmirli</option>
            </select>
            {errors.repair && (
              <span className="text-danger">{errors.repair}</span>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DynamicFields;
