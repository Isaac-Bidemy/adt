import React from 'react'

export default function Pic() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <label className="whitespace-nowrap font-semibold">Search Term:</label>
        <div className="relative w-full">
          <input
            type="text"
            id="searchTerm"
            placeholder="Search..."
            className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <label className="font-semibold">Sort:</label>
        <div className="relative w-full">
          <select
            id="sort"
            className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
          >
            {/* options */}
          </select>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <label className="font-semibold">Category:</label>
        <div className="relative w-full">
          {/* category options */}
        </div>
      </div>
      <button
        type="submit"
        className="group flex items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-gradient-to-r from-purple-500 to-pink-500 enabled:hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800 border-0 rounded-lg focus:ring-2"
      >
        <span className="items-center flex justify-center bg-white text-gray-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full rounded-lg text-sm px-4 py-2 border border-transparent">
          Apply Filters
        </span>
      </button>
    </div>
  );
};