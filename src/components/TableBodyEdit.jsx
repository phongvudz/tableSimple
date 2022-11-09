import React from "react";

const TableBodyEdit = ({
  handleCancelClick,
  editFormData,
  handleEditFormChange,
}) => {
  return (
    <tr>
      <th className=' bg-teal-200 border-2 border-black padding-4'>
        <input
          className='p-2 border-2 border-black outline-none rounded-xl '
          type='text'
          name='first_name'
          placeholder='Enter an firstName...'
          value={editFormData.first_name}
          onChange={handleEditFormChange}
        ></input>
      </th>
      <td className='border-2 border-black padding-4'>
        <input
          className='p-2 border-2 border-black outline-none rounded-xl '
          type='text'
          name='last_name'
          placeholder='Enter an lastName...'
          value={editFormData.last_name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className='border-2 border-black padding-4'>
        <input
          className='p-2 border-2 border-black outline-none rounded-xl '
          type='email'
          name='email'
          placeholder='Enter an Email...'
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className='border-2 border-black padding-4'>
        <input
          className='p-2 border-2 border-black outline-none rounded-xl '
          type='date'
          name='date_of_birth'
          placeholder='Enter an Email...'
          value={editFormData.date_of_birth}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className='border-2 border-black padding-4'>
        <input
          className='p-2 border-2 border-black outline-none rounded-xl '
          type='text'
          name='country'
          placeholder='Enter an Country...'
          value={editFormData.country}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <th className=' bg-teal-200 border-2 border-black padding-4'>
        <input
          className='p-2 border-2 border-black outline-none rounded-xl '
          type='text'
          name='phone'
          placeholder='Enter an Phone...'
          value={editFormData.phone}
          onChange={handleEditFormChange}
        ></input>
      </th>
      <th className='flex gap-2'>
        <button
          className='p-2 bg-gray-500 rounded-lg  
           font-bold'
          type='submit'
        >
          Save
        </button>
        <button
          className='p-2 bg-red-500 rounded-lg  
           font-bold'
          type='submit'
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </th>
    </tr>
  );
};

export default TableBodyEdit;
