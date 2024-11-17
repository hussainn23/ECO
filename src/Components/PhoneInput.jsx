import React, { useEffect, useRef } from "react";
import "intl-tel-input/build/css/intlTelInput.min.css"; 
import intlTelInput from "intl-tel-input";

const PhoneInput = ({ value, onChange }) => {
  const phoneInputRef = useRef(null);

  useEffect(() => {
    const input = phoneInputRef.current;

 
    const iti = intlTelInput(input, {
      initialCountry: "auto",
      geoIpLookup: function (callback) {
        fetch("https://ipinfo.io", { method: "GET" })
          .then(response => response.json())
          .then(data => {
            const countryCode = data.country ? data.country.toLowerCase() : "us";
            callback(countryCode);
          })
          .catch(() => callback("us"));
      },
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });

   
    const handleInputChange = () => {
      const phoneNumber = iti.getNumber(); 
      if (onChange) onChange(phoneNumber);
    };
    input.addEventListener("input", handleInputChange);

    return () => {
      input.removeEventListener("input", handleInputChange); 
      if (iti) iti.destroy(); 
    };
  }, [onChange]);

  return (
    <input
      type="tel"
      ref={phoneInputRef}
      value={value} 
      onChange={(e) => onChange && onChange(e.target.value)} 
      className="w-[237%] h-[7vh] mt-2 m-auto font-[500] border border-gray-400 rounded-sm"
      placeholder="Enter your phone number"
    />
  );
};

export default PhoneInput;
