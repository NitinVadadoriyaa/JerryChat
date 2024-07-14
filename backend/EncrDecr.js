const CryptoJS = require("crypto-js");

// const secretKey = process.env.REACT_APP_SECRET_KEY
//   ? process.env.REACT_APP_SECRET_KEY
//   : "12345";

const encrypt = (plainText, secretKey) => {
  const cipherText = CryptoJS.AES.encrypt(plainText, secretKey).toString();
  return cipherText;
};

const decrypt = (cipherText, secretKey) => {
  const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
  const plainText = bytes.toString(CryptoJS.enc.Utf8);
  return plainText;
};

module.exports = { encrypt, decrypt };
