
import React, { useState } from "react";
import { FaAsterisk } from "react-icons/fa";
import PhoneInput from "./PhoneInput";


const Form = () => {
  const [formData, setFormData] = useState({
    homeOwnership: "",
    claimBenefits: "",
    existingBoilerType: "",
    boilerFuel: "",
    name: "",
    email: "",
    address: "",
    postcode: "",
    phone: "",
    contactMethod: "",
    contactTime: "",
    uploadedFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, uploadedFile: e.target.files[0] });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-[55vw] font-poppins border-t-4 border-b-4 pt-8 pb-[4rem] px-6 border-[#E21E24] shadow-lg font-[500] text-[1.1rem] text-[#A6A6A6]">
     
        <label className="flex items-center">
          What is your home ownership status?
          <FaAsterisk className="text-red-600 text-[8px]" />
        </label>
        <div className="flex gap-4">
          <label>
            <input
              type="radio"
              name="homeOwnership"
              value="Homeowner"
              onChange={handleChange}
            />
            Homeowner
          </label>
          <label>
            <input
              type="radio"
              name="homeOwnership"
              value="Private Tenant"
              onChange={handleChange}
            />
            Private Tenant
          </label>
          <label>
            <input
              type="radio"
              name="homeOwnership"
              value="Council House"
              onChange={handleChange}
            />
            Council House
          </label>
        </div>


        <label className="flex items-center mt-5">
          Do you or anyone in your household claim benefits?
          <FaAsterisk className="text-red-600 text-[8px]" />
        </label>
        <select
          name="claimBenefits"
          value={formData.claimBenefits}
          onChange={handleChange}
          className="w-[97%] h-[7vh] mt-2 m-auto focus:none font-[500] border border-gray-400 outline-none focus:outline-none rounded-sm"
        >
          <option value="" disabled>
            Select Your Benefits
          </option>
          <option value="income_support">Income Support</option>
          <option value="pension_guarantee_credit">Pension Guarantee Credit</option>
          <option value="working_tax_credit">Working Tax Credit (WTC)</option>
          <option value="child_tax_credit">Child Tax Credit (CTC)</option>
          <option value="universal_credit">Universal Credit (UC)</option>
          <option value="housing_benefit">Housing Benefit</option>
          <option value="pension_savings_credit">Pension Savings Credit</option>
          <option value="not_sure">Not Sure</option>
        </select>

    
        <label className="flex items-center mt-5">
          What is your existing boiler type?
          <FaAsterisk className="text-red-600 text-[8px]" />
        </label>
        <select
          name="existingBoilerType"
          value={formData.existingBoilerType}
          onChange={handleChange}
          className="w-[97%] h-[7vh] mt-2 m-auto focus:none font-[500] border border-gray-400 outline-none focus:outline-none rounded-sm"
        >
          <option value="" disabled>
            Select your boiler type
          </option>
          <option value="combi_boiler">Combi Boiler (No Tank Attached)</option>
          <option value="boiler_with_tank">Boiler With A Tank Attached</option>
          <option value="no_heating_system">No Heating System Fitted</option>
          <option value="back_boiler">Back Boiler Behind The Fire</option>
          <option value="unsure">Unsure</option>
        </select>

  
        <label className="flex items-center mt-5">
          What fuel does your boiler use?
          <FaAsterisk className="text-red-600 text-[8px]" />
        </label>
        <select
          name="boilerFuel"
          value={formData.boilerFuel}
          onChange={handleChange}
          className="w-[97%] h-[7vh] mt-2 m-auto focus:none font-[500] border border-gray-400 outline-none focus:outline-none rounded-sm"
        >
          <option value="" disabled>
            Select your Fuel
          </option>
          <option value="mains_gas">Mains Gas</option>
          <option value="lpg">LPG</option>
          <option value="oil">Oil</option>
          <option value="electric">Electric</option>
        </select>

  
        <label className="flex items-center mt-5">
          Name
          <FaAsterisk className="text-red-600 text-[8px]" />
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-[97%] h-[7vh] mt-2 m-auto focus:none font-[500] border border-gray-400 outline-none focus:outline-none rounded-sm"
        />

  
        <label className="flex items-center mt-5">
          Email
          <FaAsterisk className="text-red-600 text-[8px]" />
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-[97%] h-[7vh] mt-2 m-auto focus:none font-[500] border border-gray-400 outline-none focus:outline-none rounded-sm"
        />

    
        <label className="flex items-center mt-5">
          Address
          <FaAsterisk className="text-red-600 text-[8px]" />
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-[97%] h-[7vh] mt-2 m-auto focus:none font-[500] border border-gray-400 outline-none focus:outline-none rounded-sm"
        />

  
        <label className="flex items-center mt-5">
          Phone
          <FaAsterisk className="text-red-600 text-[8px]" />
        </label>
        <PhoneInput
          country={"us"}
          value={formData.phone}
          onChange={handlePhoneChange}
        />

    
        <label className="flex items-center mt-5">
          Attach pictures to fast track your application
        </label>
        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[20vh] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                               
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" onChange={handleFileChange} />
                        </label>
      
        <input
          type="submit"
          value="Submit"
          className="w-[97%] h-[7vh] mt-4 m-auto focus:none font-[500] border border-[#E21E24] text-white outline-none focus:outline-none rounded-md bg-[#E21E24]"
        />
      </div>
    </form>
  );
};

export default Form;
