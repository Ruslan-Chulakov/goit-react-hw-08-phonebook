export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilterValue = state => state.filter;

export const getUserName = state => state.authhorization.user.name;
export const getIsLoggedIn = state => state.authhorization.isLoggedIn;
