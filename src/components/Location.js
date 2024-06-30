import React, { useEffect, useState } from "react";
import country_state_city from "../data/country_state_city.json";

const Location = ({ formData, errors, handleChange }) => {
  // country
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(
    formData.country || ""
  );

  // state
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState(formData.state || "");
  const [stateRequired, setStateRequired] = useState(false);
  const [errorState, setErrorState] = useState("");

  // city
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(formData.city || "");
  const [cityRequired, setCityRequired] = useState(false);
  const [errorCity, setErrorCity] = useState("");

  console.log(formData.country);

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

      if (statesData.length > 0) {
        setStateRequired(true);
        setErrorState("Rayon seçin");
      } else {
        setStateRequired(false);
        setErrorState("");
      }
      setSelectedState("");
      setCities([]);

      handleChange({ target: { name: "country", value: selectedCountry } });
    } else {
      setStates([]);
      setStateRequired(false);

      setCities([]);
    }
  }, [selectedCountry]);

  useEffect(() => {
    // Get cities based on selected state
    if (selectedState) {
      const citiesData = country_state_city.filter(
        (item) => item.parent_id === parseInt(selectedState)
      );

      setCities(citiesData);

      if (citiesData.length > 0) {
        setCityRequired(true);
        setErrorCity("Qəsəbə seçin");
      } else {
        setCityRequired(false);
        setErrorCity("");
      }

      setSelectedCity("");

      handleChange({ target: { name: "state", value: selectedState } });
    } else {
      setCities([]);
      setCityRequired(false);
    }
  }, [selectedState]);

  useEffect(() => {
    handleChange({ target: { name: "city", value: selectedCity } });
  }, [selectedCity]);

  const handleCountryChange = (e) => {
    const value = e.target.value;
    setSelectedCountry(value);
  };

  const handleStateChange = (e) => {
    const value = e.target.value;
    setSelectedState(value);
  };

  const handleCityChange = (e) => {
    const value = e.target.value;
    setSelectedCity(value);
  };

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
            onChange={handleCountryChange}
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
            onChange={handleStateChange}
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
          {stateRequired && <span className="text-danger">{errorState}</span>}
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
            onChange={handleCityChange}
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
          {cityRequired && <span className="text-danger">{errorCity}</span>}
        </div>
      </div>
    </div>
  );
};

export default Location;
