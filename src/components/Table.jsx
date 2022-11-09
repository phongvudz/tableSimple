import React, { Fragment, useState } from "react";
import MOCK_DATA from "../components/MOCK_DATA .json";
import TableBody from "./TableBody";
import FormAddContact from "./FormAddContact";
import Pagination from "./Pagination";
import TableBodyEdit from "./TableBodyEdit";
import { v4 as uuid } from "uuid";

const Table = () => {
  const [contacts, setContacts] = useState(MOCK_DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [editContactId, setEditContactId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    id: uuid(),
    first_name: "",
    last_name: "",
    email: "",
    date_of_birth: "",
    country: "",
    phone: "",
  });

  const handleEditFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditClick = (e, contact) => {
    e.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      id: uuid(),
      first_name: contact.first_name,
      last_name: contact.last_name,
      email: contact.email,
      date_of_birth: contact.date_of_birth,
      country: contact.country,
      phone: contact.phone,
    };
    setEditFormData(formValues);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedContact = {
      id: editFormData.id,
      first_name: editFormData.first_name,
      last_name: editFormData.last_name,
      email: editFormData.email,
      date_of_birth: editFormData.date_of_birth,
      country: editFormData.country,
      phone: editFormData.phone,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);
    setContacts(newContacts);
  };
  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const currentContacts = contacts.slice(indexOfFirst, indexOfLast);

  const pagination = (pageNumber) => setCurrentPage(pageNumber);

  let pageNumber = [];
  for (let i = 1; i <= Math.ceil(contacts.length / postsPerPage); i++) {
    pageNumber.push(i);
  }
  const prevPage = () => {
    setCurrentPage(currentPage === 1 ? pageNumber.length : currentPage - 1);
  };
  const nextPage = () => {
    setCurrentPage(currentPage === pageNumber.length ? 1 : currentPage + 1);
  };
  return (
    <div className=''>
      <div className='w-full'>
        <form onSubmit={handleEditFormSubmit}>
          <table className='table w-full overflow-scroll'>
            <thead>
              <tr>
                <th className='border-2 text-left p-4'>First Name</th>
                <th className='border-2 text-left p-4'>Last Name</th>
                <th className='border-2 text-left p-4'>Email</th>
                <th className='border-2 text-left p-4'>Date Of Birth</th>
                <th className='border-2 text-left p-4'>Country</th>
                <th className='border-2 text-left p-4'>Phone</th>
                <th className='border-2 text-left p-4'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentContacts?.map((contact) => (
                <Fragment key={contact.id}>
                  {editContactId === contact.id ? (
                    <TableBodyEdit
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <TableBody
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
        <div className='flex  max-w-sm  ml-auto my-2'>
          <Pagination
            pagination={pagination}
            pageNumber={pageNumber}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        </div>
        <div className='p-4  border-2  border-black w-full mt-20'>
          <FormAddContact setContacts={setContacts} contacts={contacts} />
        </div>
      </div>
    </div>
  );
};

export default Table;
