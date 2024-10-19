import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [formData, setFormData] = useState({
    major: '',
    type: '',
    make: '',
    location: '',
    category: '',
    fromYear: '',
    toYear: '',
    model: '',
    country: ''
  });

  const [advanced, setAdvanced] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  const handleDropdownSelect = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Head>
        <title>GirGir Auction</title>
        <meta name="description" content="Win your perfect car auction" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      {/* Header */}
      <header className="bg-purple-800 text-white">
        <div className="container mx-auto py-4">
          {/* Logo, Search Bar, and User Options */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img src="/logo.png" alt="Logo" className="w-12 h-12" />
              <h1 className="text-2xl font-semibold">GirGir Auction</h1>
              {/* Search Bar */}
              <input
                type="text"
                placeholder="Search..."
                className="p-2 rounded bg-gray-70 text-white"
              />
            </div>
            <div className="flex items-center space-x-6">
              <Dropdown title="Language" onSelect={(value) => handleDropdownSelect('language', value)} />
              <Dropdown title="Currency" onSelect={(value) => handleDropdownSelect('currency', value)} />
              <Dropdown title="Location" onSelect={(value) => handleDropdownSelect('location', value)} />
              <button className="px-4 py-2">Sign Up</button>
              <button className="px-4 py-2">Sign In</button>
            </div>
          </div>

          {/* Navigation and Buttons */}
          <div className="flex justify-between items-center mt-4 text-black bg-green-500 p-2 rounded">
            <div className="flex space-x-4">
              <button className="px-4 py-2">Home</button>
              <button className="px-4 py-2">About Us</button>
              <button className="px-4 py-2">Contact Us</button>
            </div>
            <div className="flex items-center space-x-6">
              <button className="px-4 py-2 bg-blue-600 rounded-lg">Sell Your Items</button>
              <button className="px-4 py-2 bg-blue-600 rounded-lg">How To Bid</button>
              <button className="px-4 py-2 bg-yellow-700 rounded-lg">Services</button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <main className="bg-gray-900 text-white py-1">
        <div className="container mx-auto">
          <div className="flex justify-between items-start">
            {/* Left Section */}
            <div className="w-1/2">
              <h2 className="text-7xl font-bold mb-20">Win Your Perfect Car Auction</h2>
              <div className="grid grid-cols-3 gap-4 text-black">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold">1. Register</h3>
                  <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold">2. Find</h3>
                  <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold">3. Bid</h3>
                  <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                </div>
              </div>
            </div>

            {/* Search Form */}
            <div className="w-1/4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="p-6 bg-gray-800 text-white w-full max-w-md mx-auto rounded-lg shadow-lg">
                  <div className="flex justify-between mb-4">
                    <button className="p-2 bg-gray-700 rounded">All</button>
                    <button className="p-2 bg-gray-600 rounded">Find</button>
                    <button className="p-2 bg-gray-700 rounded">Quick Pick</button>
                    <button className="p-2 bg-gray-700 rounded">Scan</button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <select name="major" className="bg-gray-700 p-2 rounded" onChange={handleChange}>
                      <option>Major</option>
                      {/* Add more options */}
                    </select>
                    <select name="category" className="bg-gray-700 p-2 rounded" onChange={handleChange}>
                      <option>Category</option>
                      {/* Add more options */}
                    </select>
                    <select name="type" className="bg-gray-700 p-2 rounded" onChange={handleChange}>
                      <option>Type</option>
                      {/* Add more options */}
                    </select>
                    <select name="fromYear" className="bg-gray-700 p-2 rounded" onChange={handleChange}>
                      <option>From Year</option>
                      {/* Add more options */}
                    </select>
                    <select name="make" className="bg-gray-700 p-2 rounded" onChange={handleChange}>
                      <option>Make</option>
                      {/* Add more options */}
                    </select>
                    <select name="model" className="bg-gray-700 p-2 rounded" onChange={handleChange}>
                      <option>Model</option>
                      {/* Add more options */}
                    </select>
                    <select name="location" className="bg-gray-700 p-2 rounded" onChange={handleChange}>
                      <option>Location</option>
                      {/* Add more options */}
                    </select>
                    <select name="country" className="bg-gray-700 p-2 rounded" onChange={handleChange}>
                      <option>Country</option>
                      {/* Add more options */}
                    </select>
                  </div>

                  <button
                    type="button"
                    className="text-gray-400"
                    onClick={() => setAdvanced(!advanced)}
                  >
                    {advanced ? "Hide Advanced" : "Advanced"}
                  </button>

                  {advanced && (
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <select className="bg-gray-700 p-2 rounded">
                        <option>Advanced Option 1</option>
                        {/* Add more options */}
                      </select>
                      <select className="bg-gray-700 p-2 rounded">
                        <option>Advanced Option 2</option>
                        {/* Add more options */}
                      </select>
                    </div>
                  )}

                  <div className="flex justify-between mt-4">
                    <button className="bg-gray-600 p-1 rounded">Sort</button>
                    <button className="bg-gray-600 p-1 rounded">Stock Filter</button>
                    <button className="bg-gray-600 p-1 rounded">Sale Filter</button>
                    <button className="bg-gray-600 p-1 rounded">Map</button>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 p-3 rounded text-white mt-4"
                  >
                    Search
                  </button>
                  <div className="flex justify-between mt-4">
                    <button className="bg-gray-600 p-1 rounded">Inventory</button>
                    <button className="bg-gray-600 p-1 rounded">Action</button>
                    <button className="bg-gray-600 p-1 rounded">Vendor</button>
                    <button className="bg-gray-600 p-1 rounded">Location</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const Dropdown = ({ title, onSelect }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (value) => {
    onSelect(value);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="bg-gray-700 px-4 py-2 rounded focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        {title}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
        </div>
      )}
    </div>
  );
};