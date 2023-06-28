// import { useState } from "react";

function MyForm() {
  const handleInputChange = (event) => {};
  console.log();
  return (
    <>
      <h1> Its My Sign In Form</h1>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleInputChange}
        />
      </div>
    </>
  );
}

export default MyForm;
