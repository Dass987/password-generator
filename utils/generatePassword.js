const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';

const generatePassword = (length, hasNumbers, hasSymbols) => {
  let chars = alpha;
  let password = '';

  if (hasNumbers) chars += numbers;
  if (hasSymbols) chars += symbols;

  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
};

module.exports = generatePassword;
