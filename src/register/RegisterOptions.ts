const namePattern = /^[a-zA-Z ]*$/;
const phoneNumberPattern = /\d{10}/;
const addressNumberPattern = /\d/g;
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

export const streetNumberOptions = {
  required: 'Street name is required.',
  maxLength: {
    value: 20,
    message: 'The maximum length is 20 characters.',
  },
  pattern: {
    value: addressNumberPattern,
    message: 'Please enter a valid street number.',
  },
};

export const streetNameOptions = {
  required: 'Street number is required.',
  maxLength: {
    value: 20,
    message: 'The maximum length is 20 characters.',
  },
  pattern: {
    value: namePattern,
    message: 'Please enter a valid street name.',
  },
};

export const streetDirectionOptions = {
  required: 'Street direction is required.',
  maxLength: {
    value: 10,
    message: 'The maximum length is 10 characters.',
  },
  pattern: {
    value: namePattern,
    message: 'Please enter a valid street name.',
  },
};

export const apartmentNumberOptions = {
  maxLength: {
    value: 10,
    message: 'The maximum length is 10 digits.',
  },
  pattern: {
    value: addressNumberPattern,
    message: 'Please enter a valid apartment/unit number.',
  },
};

export const cityOptions = {
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
  required: 'Please select province',
};

export const postalCodeOptions = {
  required: 'Please enter postal code',
  maxLength: {
    value: 7,
    message: 'The maximum length is 7 characters.',
  },
  pattern: {
    value: postalCodePattern,
    message: 'Please enter a valid postal code.',
  },
};
