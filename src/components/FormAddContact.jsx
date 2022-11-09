import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import toast, { ToastBar, Toaster } from "react-hot-toast";

const FormAddContact = ({ setContacts, contacts }) => {
  const [addFormData, setAddFormData] = useState({
    id: uuid(),
    first_name: "",
    last_name: "",
    email: "",
    date_of_birth: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: uuid(),
      first_name: addFormData.first_name,
      last_name: addFormData.last_name,
      email: addFormData.email,
      date_of_birth: addFormData.date_of_birth,
      country: addFormData.country,
      phone: addFormData.phone,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    toast.success("Add NewContacts Success");
    setAddFormData({
      country: "",
      date_of_birth: "",
      email: "",
      first_name: "",
      last_name: "",
      phone: "",
    });
  };

  return (
    <div className=''>
      <h2 className='text-4xl font-bold mb-4 border-black text-center'>
        Add a contact
      </h2>
      <form
        onSubmit={handleSubmit}
        className='flex justify-evenly items-start gap-2 my-2 flex-wrap'
      >
        <input
          className='p-2 border-2 border-black outline-none rounded-xl '
          onChange={handleChange}
          value={addFormData.first_name}
          type='text'
          name='first_name'
          required='required'
          placeholder='Enter an firstName...'
        />
        <input
          className='p-2 border-2 border-black outline-none rounded-xl '
          onChange={handleChange}
          value={addFormData.last_name}
          type='text'
          name='last_name'
          required='required'
          placeholder='Enter an lastName...'
        />
        <input
          className='p-2 border-2 border-black outline-none rounded-xl '
          onChange={handleChange}
          value={addFormData.email}
          type='email'
          name='email'
          required='required'
          placeholder='Enter an Email...'
        />
        <input
          className='p-2 border-2 border-black outline-none rounded-xl '
          onChange={handleChange}
          value={addFormData.date_of_birth}
          type='date'
          name='date_of_birth'
          required='required'
          placeholder='Enter an DateOfBirth...'
        />
        <input
          className='p-2 border-2 border-black outline-none rounded-xl '
          onChange={handleChange}
          value={addFormData.country}
          type='text'
          name='country'
          required='required'
          placeholder='Enter an Country...'
        />
        <input
          className='p-2 border-2 border-black outline-none rounded-xl '
          onChange={handleChange}
          value={addFormData.phone}
          type='number'
          name='phone'
          required='required'
          placeholder='Enter an Phone...'
        />
        <button
          type='submit'
          className='border-2 border-black p-1 rounded-lg bg-teal-200'
        >
          Add Contact
        </button>
      </form>
      <Toaster>
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== "loading" && (
                  <button onClick={() => toast.dismiss(t.id)}>X</button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
    </div>
  );
};

export default FormAddContact;
