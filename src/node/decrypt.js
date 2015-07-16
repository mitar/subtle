
var decrypt = function decrypt(alg, key, data, nonce){
  console.log("decrypt", alg, key, data)
  if (!key._decrypt)
    return Promise.reject("Unsupported usage for that key")
  else
    return key._decrypt(alg,data, nonce);
};


module.exports = decrypt;
