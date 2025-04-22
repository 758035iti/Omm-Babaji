/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import React, { useState, ChangeEvent } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";

// const BrahminRegistration = () => {
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     name: "",
//     username: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
//     country: "",
//     state: "",
//     city: "",
//     experience: 0,
//     pujaType: "",
//     userType: "brahmin",
//   });

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const [errors, setErrors] = useState<any>({});
//   // const [errors, setErrors] = useState<FormErrors>({});

//   // inside validateForm:

//   const handleInputChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     setErrors((prev: any) => ({ ...prev, [name]: "" }));
//   };

//   const validateForm = () => {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const newErrors: any = {};

//     if (!formData.name || formData.name.length < 3)
//       newErrors.name = "Name must be at least 3 characters";

//     if (!formData.username || formData.username.length < 3)
//       newErrors.username = "Username must be at least 3 characters";

//     if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
//       newErrors.email = "Valid email is required";

//     if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber))
//       newErrors.phoneNumber = "Phone number must be 10 digits";

//     if (!formData.password || formData.password.length < 6)
//       newErrors.password = "Password must be at least 6 characters";

//     if (!formData.country) newErrors.country = "Country is required";
//     if (!formData.state) newErrors.state = "State is required";
//     if (!formData.city) newErrors.city = "City is required";
//     if (!formData.pujaType) newErrors.pujaType = "Puja Type is required";
//     if (!formData.userType) newErrors.userType = "user Type is required";
//     if (formData.experience <= 0)
//       newErrors.experience = "Experience must be greater than 0";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleRegister = async () => {
//     if (!validateForm()) return;

//     try {
//       const response = await axios.post(
//         "http://localhost:4002/api/brahmin/register",
//         formData
//       );
//       if (response.status === 200) {
//         alert("You are registered successfully");
//         router.push("/brahmin_login");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <section className="bg-gradient-to-t from-pink-950 to-red-950 w-full h-auto px-4 md:px-6 py-16 flex justify-center items-center">
//       <form className="bg-opacity-40 shadow-lg bg-transparent w-full max-w-2xl border-2 border-white rounded-lg p-6 text-white">
//         <h2 className="text-3xl font-bold text-center mb-6">
//           Brahmin Registration Form
//         </h2>

//         {/* Name & Username */}
//         <div className="grid md:grid-cols-2 gap-4">
//           <div>
//             <label className="text-sm text-gray-300">Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               placeholder="Enter your name"
//               className="w-full p-2 mt-1 rounded bg-slate-300 text-black"
//             />
//             <p className="text-red-500 text-sm">{errors.name}</p>
//           </div>
//           <div>
//             <label className="text-sm text-gray-300">Username:</label>
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleInputChange}
//               placeholder="Choose a username"
//               className="w-full p-2 mt-1 rounded bg-slate-300 text-black"
//             />
//             <p className="text-red-500 text-sm">{errors.username}</p>
//           </div>
//         </div>

//         {/* Email & Phone */}
//         <div className="grid md:grid-cols-2 gap-4 mt-4">
//           <div>
//             <label className="text-sm text-gray-300">Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Enter your email"
//               className="w-full p-2 mt-1 rounded bg-slate-300 text-black"
//             />
//             <p className="text-red-500 text-sm">{errors.email}</p>
//           </div>
//           <div>
//             <label className="text-sm text-gray-300">Phone Number:</label>
//             <input
//               type="tel"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleInputChange}
//               placeholder="10-digit mobile number"
//               className="w-full p-2 mt-1 rounded bg-slate-300 text-black"
//             />
//             <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
//           </div>
//         </div>

//         {/* Password */}
//         <div className="mt-4">
//           <label className="text-sm text-gray-300">Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             placeholder="Choose a password"
//             className="w-full p-2 mt-1 rounded bg-slate-300 text-black"
//           />
//           <p className="text-red-500 text-sm">{errors.password}</p>
//         </div>

//         {/* Country, State, City */}
//         <div className="grid md:grid-cols-3 gap-4 mt-4">
//           <div>
//             <label className="text-sm text-gray-300">Country:</label>
//             <input
//               type="text"
//               name="country"
//               value={formData.country}
//               onChange={handleInputChange}
//               placeholder="Country"
//               className="w-full p-2 mt-1 rounded bg-slate-300 text-black"
//             />
//             <p className="text-red-500 text-sm">{errors.country}</p>
//           </div>
//           <div>
//             <label className="text-sm text-gray-300">State:</label>
//             <input
//               type="text"
//               name="state"
//               value={formData.state}
//               onChange={handleInputChange}
//               placeholder="State"
//               className="w-full p-2 mt-1 rounded bg-slate-300 text-black"
//             />
//             <p className="text-red-500 text-sm">{errors.state}</p>
//           </div>
//           <div>
//             <label className="text-sm text-gray-300">City:</label>
//             <input
//               type="text"
//               name="city"
//               value={formData.city}
//               onChange={handleInputChange}
//               placeholder="City"
//               className="w-full p-2 mt-1 rounded bg-slate-300 text-black"
//             />
//             <p className="text-red-500 text-sm">{errors.city}</p>
//           </div>
//         </div>

//         {/* Experience & Puja Type */}
//         <div className="grid md:grid-cols-2 gap-4 mt-4">
//           <div>
//             <label className="text-sm text-gray-300">Experience (yrs):</label>
//             <input
//               type="range"
//               name="experience"
//               min="0"
//               max="50"
//               value={formData.experience}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   experience: Number(e.target.value),
//                 })
//               }
//               className="w-full mt-2"
//             />
//             <p className="text-white">{formData.experience} years</p>
//             <p className="text-red-500 text-sm">{errors.experience}</p>
//           </div>
//           <div>
//             <label className="text-sm text-gray-300">Puja Type:</label>
//             <select
//               name="pujaType"
//               value={formData.pujaType}
//               onChange={handleInputChange}
//               className="w-full p-2 mt-1 rounded bg-slate-300 text-black"
//             >
//               <option value="">Select Puja Type</option>
//               <option value="Vedic Rituals">Vedic Rituals</option>
//               <option value="Astrology">Astrology</option>
//               <option value="Spiritual Healing">Spiritual Healing</option>
//             </select>
//             <p className="text-red-500 text-sm">{errors.pujaType}</p>
//           </div>
//           <div className="mt-4">
//             <label className="text-sm text-gray-300">User Type:</label>
//             <select
//               name="userType"
//               value={formData.userType}
//               onChange={handleInputChange}
//               className="w-full p-2 mt-1 rounded bg-slate-300 text-black"
//             >
//               <option value="">Select user type</option>
//               <option value="brahmin">Brahmin</option>
//               <option value="user">User</option>
//               <option value="admin">Admin</option>
//             </select>
//             <p className="text-red-500 text-sm">{errors.userType}</p>
//           </div>
//         </div>

//         {/* Submit */}
//         <button
//           type="button"
//           onClick={handleRegister}
//           className="bg-blue-500 hover:bg-blue-500 mt-6 w-full py-2 rounded text-white font-semibold"
//         >
//           Register
//         </button>

//         <p className="text-sm text-center mt-4">
//           Already registered?{" "}
//           <span
//             className="text-blue-400 underline cursor-pointer"
//             onClick={() => router.push("/brahmin_login")}
//           >
//             Login here
//           </span>
//         </p>
//       </form>
//     </section>
//   );
// };

// export default BrahminRegistration;
"use client";
import React, { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const BrahminRegistration = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    aadharNumber: "",
    address: "",
    area: "",
    city: "",
    state: "",
    language: "",
    registrationType: "brahmin",
    experienceCategory: "",
    experienceDetails: "",
    poojaList: [] as string[],
  });

  const [errors, setErrors] = useState<any>({});

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev: any) => ({ ...prev, [name]: "" }));
  };

  const handleMultiSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const options = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData((prev) => ({ ...prev, poojaList: options }));
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.username || formData.username.length < 3)
      newErrors.username = "Username must be at least 3 characters";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = "Phone number must be 10 digits";
    if (!formData.password || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!formData.aadharNumber || formData.aadharNumber.length !== 12)
      newErrors.aadharNumber = "Aadhar must be 12 digits";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.language) newErrors.language = "Language is required";
    if (!formData.registrationType)
      newErrors.registrationType = "Type is required";
    if (!formData.experienceCategory) newErrors.experienceCategory = "Required";
    if (!formData.experienceDetails) newErrors.experienceDetails = "Required";
    if (formData.poojaList.length === 0)
      newErrors.poojaList = "Select at least one puja";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    try {
      const updatedFormData = {
        ...formData,
        poojaList: JSON.stringify(formData.poojaList), // stringify poojaList
      };
      console.log("Submitting data:", updatedFormData);
      const response = await axios.post(
        "http://localhost:4002/api/brahmin/register",
        updatedFormData
      );
      if (response.status === 200) {
        alert("Registration successful!");
        router.push("/brahmin_login");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-pink-950 to-red-900 flex justify-center items-center px-4 py-12">
      <form className="bg-white bg-opacity-10 backdrop-blur-md border border-white p-8 rounded-xl w-full max-w-3xl ">
        <h2 className="text-3xl  font-bold text-center mb-6">
          Brahmin Registration
        </h2>

        {/* Three-column name fields */}
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {["firstName", "middleName", "lastName"].map((field, idx) => (
            <div key={idx}>
              <label className="block">
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="text"
                name={field}
                className="w-full p-2 mt-1 rounded bg-slate-200 text-black"
                onChange={handleInputChange}
              />
              <p className="text-red-500 text-sm">{errors[field]}</p>
            </div>
          ))}
        </div>

        {/* Username and Email */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block">Username</label>
            <input
              type="text"
              name="username"
              className="w-full p-2 mt-1 rounded bg-slate-200 text-black"
              onChange={handleInputChange}
            />
            <p className="text-red-500 text-sm">{errors.username}</p>
          </div>
          <div>
            <label className="block">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 mt-1 rounded bg-slate-200 text-black"
              onChange={handleInputChange}
            />
            <p className="text-red-500 text-sm">{errors.email}</p>
          </div>
        </div>

        {/* Phone and Password */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              className="w-full p-2 mt-1 rounded bg-slate-200 text-black"
              onChange={handleInputChange}
            />
            <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
          </div>
          <div>
            <label className="block">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 mt-1 rounded bg-slate-200 text-black"
              onChange={handleInputChange}
            />
            <p className="text-red-500 text-sm">{errors.password}</p>
          </div>
        </div>

        {/* Aadhar and Language */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block">Aadhar Number</label>
            <input
              type="text"
              name="aadharNumber"
              className="w-full p-2 mt-1 rounded bg-slate-200 text-black"
              onChange={handleInputChange}
            />
            <p className="text-red-500 text-sm">{errors.aadharNumber}</p>
          </div>
          <div>
            <label className="block">Language</label>
            <input
              type="text"
              name="language"
              className="w-full p-2 mt-1 rounded bg-slate-200 text-black"
              onChange={handleInputChange}
            />
            <p className="text-red-500 text-sm">{errors.language}</p>
          </div>
        </div>

        {/* Address and Area */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block">Address</label>
            <textarea
              name="address"
              rows={2}
              className="w-full p-2 mt-1 rounded bg-slate-200 text-black"
              onChange={handleInputChange}
            />
            <p className="text-red-500 text-sm">{errors.address}</p>
          </div>
          <div>
            <label className="block">Area</label>
            <input
              type="text"
              name="area"
              className="w-full p-2 mt-1 rounded bg-slate-200 text-black"
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* City and State */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block">City</label>
            <input
              type="text"
              name="city"
              className="w-full p-2 mt-1 rounded bg-slate-200 text-black"
              onChange={handleInputChange}
            />
            <p className="text-red-500 text-sm">{errors.city}</p>
          </div>
          <div>
            <label className="block">State</label>
            <input
              type="text"
              name="state"
              className="w-full p-2 mt-1 rounded bg-slate-200 text-black"
              onChange={handleInputChange}
            />
            <p className="text-red-500 text-sm">{errors.state}</p>
          </div>
        </div>

        {/* Registration Type and Experience Category */}
        <div>
          <label className="block">Registration Type</label>
          <input
            type="text"
            name="registrationType"
            className="w-full p-2 mt-1 rounded bg-slate-200 text-black"
          />
          <p className="text-red-500 text-sm">{errors.registrationType}</p>
        </div>
        <div>
          <label className="block">Experience Category</label>
          <input
            type="text"
            name="experienceCategory"
            className="w-full p-2 mt-1 rounded bg-slate-200 text-black"
            onChange={handleInputChange}
          />
          <p className="text-red-500 text-sm">{errors.experienceCategory}</p>
        </div>
        {/* Experience Details */}
        <div className="mb-4">
          <label className="block">Experience Details</label>
          <textarea
            name="experienceDetails"
            rows={3}
            className="w-full p-2 mt-1 rounded bg-slate-200 text-black"
            onChange={handleInputChange}
          />
          <p className="text-red-500 text-sm">{errors.experienceDetails}</p>
        </div>

        {/* Pooja List */}
        <div className="mb-4">
          <label className="block">
            Select Puja List (hold Ctrl to select multiple)
          </label>
          <select
            multiple
            name="poojaList"
            className="w-full p-2 mt-1 rounded bg-slate-200 text-black"
            onChange={handleMultiSelectChange}
          >
            <option value="Griha Pravesh">Griha Pravesh</option>
            <option value="Satyanarayan Puja">Satyanarayan Puja</option>
            <option value="Navagraha Puja">Navagraha Puja</option>
            <option value="Mundan">Mundan</option>
            <option value="Griha Pravesh">Griha Pravesh</option>
            <option value="Satyanarayan Puja">Satyanarayan Puja</option>
            <option value="Navagraha Puja">Navagraha Puja</option>
            <option value="Mundan">Mundan</option>
            <option value="Marriage Puja">Marriage Puja</option>
            <option value="Shraddha Karma">Shraddha Karma</option>
            <option value="Lakshmi Puja">Lakshmi Puja</option>
            <option value="Durga Puja">Durga Puja</option>
            <option value="Kali Puja">Kali Puja</option>
            <option value="Saraswati Puja">Saraswati Puja</option>
            <option value="Ganesh Puja">Ganesh Puja</option>
            <option value="Rudrabhishek">Rudrabhishek</option>
            <option value="Hanuman Puja">Hanuman Puja</option>
            <option value="Bhumi Pujan">Bhumi Pujan</option>
            <option value="Naamkaran">Naamkaran</option>
            <option value="Upanayan Sanskar">
              Upanayan Sanskar (Thread Ceremony)
            </option>
            <option value="Annaprashan">
              Annaprashan (First Rice Ceremony)
            </option>
            <option value="Vastu Shanti Puja">Vastu Shanti Puja</option>
            <option value="Chandi Path">Chandi Path</option>
            <option value="Mahamrityunjaya Jaap">Mahamrityunjaya Jaap</option>
            <option value="Pitru Dosh Nivaran Puja">
              Pitru Dosh Nivaran Puja
            </option>
            <option value="Kal Sarp Dosh Puja">Kal Sarp Dosh Puja</option>
            <option value="Rahu Ketu Shanti Puja">Rahu Ketu Shanti Puja</option>
            <option value="Business Opening Puja">Business Opening Puja</option>
            <option value="Vehicle Puja">Vehicle Puja</option>
          </select>
          <p className="text-red-500 text-sm">{errors.poojaList}</p>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleRegister}
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold text-white"
        >
          Register
        </button>

        <p className="text-sm text-center mt-4">
          Already registered?{" "}
          <span
            className="text-blue-400 underline cursor-pointer"
            onClick={() => router.push("/brahmin_login")}
          >
            Login here
          </span>
        </p>
      </form>
    </section>
  );
};

export default BrahminRegistration;
