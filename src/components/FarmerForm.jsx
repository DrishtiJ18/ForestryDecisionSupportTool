import React from "react";

import {
  FaMapMarkerAlt,
  FaCloudRain,
  FaBullseye,
} from "react-icons/fa";
import { ImEarth } from "react-icons/im";
import { GiFarmTractor } from "react-icons/gi";

import {
  states,
  soilTypes,
  rainfallOptions,
  purposeOptions,
} from "../constants/options";

export default function FarmerForm({
  form,
  loading,
  onChange,
  onSubmit,
}) {
  return (
    <div className="form-section">
      <div className="form-header">
        <GiFarmTractor size={34} />

        <h2>Tell us about your farm</h2>
      </div>

      <div className="form-grid">
        <SelectField
          icon={<FaMapMarkerAlt />}
          label="State / Region"
          name="state"
          value={form.state}
          options={states}
          onChange={onChange}
        />

        <SelectField
          icon={<ImEarth />}
          label="Soil Type"
          name="soil"
          value={form.soil}
          options={soilTypes}
          onChange={onChange}
        />

        <SelectField
          icon={<FaCloudRain />}
          label="Rainfall"
          name="rainfall"
          value={form.rainfall}
          options={rainfallOptions}
          onChange={onChange}
        />

        <SelectField
          icon={<FaBullseye />}
          label="Main Purpose"
          name="purpose"
          value={form.purpose}
          options={purposeOptions}
          onChange={onChange}
        />
      </div>

      <div className="btn-container">
        <button
          disabled={loading}
          className="recommend-btn"
          onClick={onSubmit}
        >
          {loading
            ? "Generating Recommendations..."
            : "🌿 Get Recommendations"}
        </button>
      </div>
    </div>
  );
}

function SelectField({
  icon,
  label,
  name,
  value,
  options,
  onChange,
}) {
  return (
    <div className="field">
      <label>
        {icon} {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="">
          Select Option
        </option>

        {options.map((option) => (
          <option key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}