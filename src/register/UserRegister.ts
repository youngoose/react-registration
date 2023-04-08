const namePattern = /^[a-zA-Z ]*$/;
const phoneNumberPattern = /\d{10}/;
const streetPattern = /^[a-zA-Z0-9\- #]+$/;
const postalCodePattern = /^[A-Za-z]\d[A-Za-z][ ]?\d[A-Za-z]\d$/;

export const firstNameOptions = {
  required: 'First name is required.',
  maxLength: {
    value: 20,
    message: 'The maximum length is 20 characters.',
  },
  pattern: {
    value: namePattern,
    message: 'Please enter a valid first name.',
  },
};

export const lastNameOptions = {
  required: 'Last name is required.',
  maxLength: {
    value: 20,
    message: 'The maximum length is 20 characters.',
  },
  pattern: {
    value: namePattern,
    message: 'Please enter a valid last name.',
  },
};

export const phoneNumberOptions = {
  required: 'Phone number is required.',
  maxLength: {
    value: 10,
    message: 'The maximum length is 10 digits.',
  },
  pattern: {
    value: phoneNumberPattern,
    message: 'Please enter a valid phone number.',
  },
};

export const streetOptions = {
  required: 'Street is required.',
  maxLength: {
    value: 30,
    message: 'The maximum length is 30 characters.',
  },
  pattern: {
    value: streetPattern,
    message: 'Please enter a valid street number/name.',
  },
};

export const cityOptions = {
  required: 'Please enter city.',
  maxLength: {
    value: 20,
    message: 'The maximum length is 20 characters.',
  },
  pattern: {
    value: namePattern,
    message: 'Please enter a valid city name.',
  },
};

export const provinceOptions = {
  required: 'Please select province.',
};

export const postalCodeOptions = {
  required: 'Please enter postal code.',
  maxLength: {
    value: 7,
    message: 'The maximum length is 7 characters.',
  },
  pattern: {
    value: postalCodePattern,
    message: 'Please enter a valid postal code.',
  },
};

export const pokemonOptions = {
  required: 'Please enter your favorite pokemon',
};
