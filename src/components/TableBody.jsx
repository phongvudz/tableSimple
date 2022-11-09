import React, { useState } from "react";

const TableBody = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr key={contact.id}>
      <th className=' bg-teal-200 border-2 border-black padding-4'>
        {contact.first_name}
      </th>
      <td className='border-2 border-black padding-4'>{contact.last_name}</td>
      <td className='border-2 border-black padding-4'>{contact.email}</td>
      <td className='border-2 border-black padding-4'>
        {contact.date_of_birth}
      </td>
      <td className='border-2 border-black padding-4'>{contact.country}</td>
      <th className=' bg-teal-200 border-2 border-black padding-4'>
        {contact.phone}
      </th>
      <td className='flex gap-2 items-center justify-center'>
        <button
          type='button'
          className='p-2 bg-green-500 rounded-lg 
           font-bold'
          onClick={(e) => handleEditClick(e, contact)}
        >
          Edit
        </button>
        <button
          type='button'
          className='p-2 bg-red-500 rounded-lg 
           font-bold'
          onClick={() => handleDeleteClick(contact.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableBody;
