'use client';
import { useState } from 'react';

export default function ProfileForm() {
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfilePhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    if (profilePhoto) {
      formData.append('profilePhoto', profilePhoto);
    }

    
    console.log('Form submitted');
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-2xl shadow-black ">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 ">Create Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-6 " encType="multipart/form-data">
        <div className="flex flex-col items-center space-y-4">
          <label className="text-sm font-medium text-gray-700 justify-start">Profile Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500 text-center"
          />
          {preview && (
            <div className="w-32 h-32 rounded-full overflow-hidden shadow border ">
              <img
                src={preview}
                alt="Profile Preview"
                className="object-cover w-full h-full"
              />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
          <div>
            <label className="block text-sm font-medium ">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="input bg-gray-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Aadhaar Number</label>
            <input
              type="text"
              name="aadhaar"
              placeholder="XXXX XXXX XXXX"
              className="input bg-gray-300"
              required
              maxLength={12}
            />
          </div>

          <div>
            <label className="block text-sm font-medium ">Registration Type</label>
            <select name="registrationType" className="input bg-gray-300" required>
              <option value="">Select Type</option>
              <option value="vendor">User</option>
              <option value="customer">Brahmin</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium ">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              className="input bg-gray-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium ">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="input bg-gray-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium ">Language</label>
            <input
              type="text"
              name="language"
              placeholder="Preferred language"
              className="input bg-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Street address"
              className="input bg-gray-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium ">Area</label>
            <input
              type="text"
              name="area"
              placeholder="Local area"
              className="input bg-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium ">City</label>
            <input
              type="text"
              name="city"
              placeholder="City name"
              className="input bg-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium ">State</label>
            <input
              type="text"
              name="state"
              placeholder="State name"
              className="input bg-gray-300"
            />
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
