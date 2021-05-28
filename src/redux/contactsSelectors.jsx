import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state => state.contacts.loading;

export const getFilter = state => state.contacts.filter;

export const allContacts = state => state.contacts.items;

export const getError = state => state.contacts.error;

export const getVisibleContacts = createSelector(
  [ allContacts, getFilter ],
  (contacts, filter) => {
    const normalizedContactName = filter.toLowerCase();
    
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedContactName),
    );
  },
);

 // eslint-disable-next-line import/no-anonymous-default-export
// export default {
//   getLoading,
//   getFilter,
//   getError,
//   getVisibleContacts,
// };

