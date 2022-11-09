import React from "react";

const Pagination = ({ pagination, pageNumber, prevPage, nextPage }) => {
  return (
    <div className='gap-1 flex flex-wrap'>
      <button
        onClick={prevPage}
        className='border-2 w-8 text-center h-8 border-black  rounded-lg bg-teal-200'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-4 h-4 ml-1'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 19.5L8.25 12l7.5-7.5'
          />
        </svg>
      </button>
      {pageNumber.map((number) => (
        <button
          onClick={() => pagination(number)}
          key={number}
          className='border-2 w-8 text-center h-8 border-black  rounded-lg bg-teal-200'
        >
          {number}
        </button>
      ))}
      <button
        onClick={nextPage}
        className='border-2 w-8 text-center h-8 border-black  rounded-lg bg-teal-200'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-4 h-4 ml-1'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 4.5l7.5 7.5-7.5 7.5'
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
