import React from "react";

const UserProfile = ({ formData, handleChange, errors }) => {
  return (
    <div className="card text-dark bg-light mb-3">
      <div className="card-header">İstifadəçi Məlumatları</div>
      <div className="card-body">
        <div className="mb-2">
          <label htmlFor="username" className="form-label">
            Adınız
            <sup className="text-danger fs-6 top-0 ms-1">*</sup>
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Adınızı daxil edin"
          />
          {errors.username && (
            <span className="text-danger">{errors.username}</span>
          )}
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
                checked
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
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
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Mən vasitəçiyəm (agent)
              </label>
            </div>
          </div>
          {errors.catPosition && (
            <span className="text-danger">{errors.catPosition}</span>
          )}
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
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-poçtunuzu daxil edin"
          />
          <div id="emailHelp" className="form-text">
            E-poçtunuz heç bir halda qarşı tərəfə göstərilməyəcək.
          </div>
          {errors.email && <span className="text-danger">{errors.email}</span>}
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
            value={formData.phone}
            onChange={handleChange}
            name="phone"
            placeholder="0XX 1234567"
          />
          {errors.phone && <span className="text-danger">{errors.phone}</span>}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
