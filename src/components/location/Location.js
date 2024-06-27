import React, { useEffect, useState } from "react";
import country_state_city from "../../data/country_state_city.json";

const Location = ({ formData, handleChange, errors }) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [stateRequired, setStateRequired] = useState(false);
  const [cityRequired, setCityRequired] = useState(false);

  useEffect(() => {
    // Get countries
    const countriesData = country_state_city.filter(
      (item) => item.parent_id === 0
    );
    setCountries(countriesData);
  }, []);

  useEffect(() => {
    // Get states based on selected country
    if (selectedCountry) {
      const statesData = country_state_city.filter(
        (item) => item.parent_id === parseInt(selectedCountry)
      );
      setStates(statesData);
      setSelectedState("");
      setCities([]);
      setStateRequired(statesData.length > 0); // Check if states exist for the selected country
    } else {
      setStates([]);
      setCities([]);
      setStateRequired(false);
    }
  }, [selectedCountry]);

  useEffect(() => {
    // Get cities based on selected state
    if (selectedState) {
      const citiesData = country_state_city.filter(
        (item) => item.parent_id === parseInt(selectedState)
      );
      setCities(citiesData);
      setSelectedCity("");
      setCityRequired(citiesData.length > 0); // Check if cities exist for the selected state
    } else {
      setCities([]);
      setCityRequired(false);
    }
  }, [selectedState]);

  return (
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
            id="country"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="">Şəhər seçin</option>
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
          {errors.country && (
            <span className="text-danger">{errors.country}</span>
          )}
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div className="mb-2">
          <label htmlFor="state" className="form-label">
            Rayon
            {stateRequired && <sup className="text-danger fs-6 top-0">*</sup>}
          </label>
          <select
            className="form-select"
            id="state"
            name="state"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            disabled={!selectedCountry}
            required={stateRequired}
          >
            <option value="">Rayon seçin</option>
            {states.map((state) => (
              <option key={state.id} value={state.id}>
                {state.name}
              </option>
            ))}
          </select>
          {errors.state && <span className="text-danger">{errors.state}</span>}
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div className="mb-2">
          <label htmlFor="city" className="form-label">
            Qəsəbə
            {cityRequired && <sup className="text-danger fs-6 top-0">*</sup>}
          </label>
          <select
            className="form-select"
            id="city"
            name="city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            disabled={!selectedState}
            required={cityRequired}
          >
            <option value="">Qəsəbə seçin</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Location;
