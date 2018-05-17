// Wrapper functions for Stanford JavaScript Crypto Library

import sjcl from "./sjcl";


/* Useful to generate secret tokens for validation
 * Useful to create keys for HMAC
 * Will be useful for part 2 */
export function generateRandomness() {
  return sjcl.codec.hex.fromBits(sjcl.random.randomWords(8));
}

export function KDF(password, salt) {
  // takes a string as input
  // outputs a hex-encoded string
  const bitarrayOutput = sjcl.misc.pbkdf2(password, salt, 100000);
  return sjcl.codec.hex.fromBits(bitarrayOutput);
}

export function checkPassword(password, dbResult) {
  const inputKDFResult = KDF(password, dbResult.salt);
  if(inputKDFResult == dbResult.hashedPassword) {
    return true;
  }
  return false;
}

/* 
 * Used to sign cookie data
 * Add a parameter to cookies that is this signature on cookie data
 * On router handlers make sure this cookie has not been tampered with
        by checking signature
 * Will be useful for part 2 
 */
export function HMAC(key, data) {
  // Returns the HMAC on the data.
  // key is a hex-encoded string
  // data is a string (any encoding is fine)
  let hmacObject = new sjcl.misc.hmac(sjcl.codec.hex.toBits(key), sjcl.hash.sha256);
  const bitarrayOutput = hmacObject.encrypt(data);
  return sjcl.codec.hex.fromBits(bitarrayOutput);
}
