const {
  createCipheriv,
  createDecipheriv,
  randomBytes,
} = require('crypto');

let key =( Buffer.from(JSON.parse('{"type":"Buffer","data":[131,58,72,187,9,255,229,143,182,242,122,198,112,207,185,247,31,138,227,9,50,220,65,222,233,78,112,191,46,243,74,209]}').data ) )
console.log(key.toString('latin1'));
key =key.toString('base64')
const nonce = randomBytes(12);

const aad = Buffer.from('0123456789', 'hex');

const cipher = createCipheriv('aes-192-ccm', key, nonce, {
  authTagLength: 16
});
const plaintext = '{"type":"Buffer","data":[167,178,245,234,79,216,176,171,12,122,4,211,154,14,101,196,72,78,58,207,104,136,95,72,78,249,233,169,97,199,157,54,79,115,98,254,146,17,72,33,201,12,190,167,101,242,232,207,37,13,217,120,213,249,172,102,228,196,132,50,52,96,120,78,237,92,202,188,106,116,153,38,255,180,71,201,156,145,114,10,188,228,217,217,174,29,62,184,15,126,104,51,142,27,161,73,165,5,166,72,132,224,73,168,67,171,131,77,112,213,111,215,9,0,207,201,61,108,51,242,230,191,153,251,201,187,85,4,10,69,186,244,140,172,149,54,159,170,62,141,81,215,248,138,85,16,152,224,139,154,141,126,17,0,98,34,68,91,110,64,162,27,23,202,174,77,225,53,156,230,204,151,94,13,13,165,227,202,220,77,4,185,197,100,65,158,42,230,181,99,103,5,166,189,37,41,49,97,215,252,198,26,222,96,200,102,40,241,82,135,155,204,37,40,187,136,250,250,58,245,187,198,121,192,99,210,21,124,196,224,37,63,200,98,64,101,47,22,237,28,70,142,46,127,239,1,47,29,14,229,21,72,84,148,199,83,210,51,151,115,181,215,236,236,77,19,31,40,107,246,48,149,168,217,247,111,36,228,3,148,191,124,221,0,10,113,17,137,236,82,150,51,28,158,140,197,216,214,250,13,103,107,181,220,63,128,191,217,209,154,217,142,247,179,189,100,131,94,21,167,150,228,108,214,247,35,49,189,179,153,210,183,83,233,96,69,229,66,16,237,28,231,202,168,78,53,62,23,192,247,42,13,55,229,168,226,170,102,79,82,84,59,144,103,113,137,154,54,188,60,159,204,155,252,61,56,223,197,215,243,105,254,51,62,174,246,139,58,102,57,118,182,220,166,209,35,137,128,232,160,231,168,207,136,99,177,91,171,18,130,75,149,143,247,239,156,22,79,215,39,7,99,168,97,121,146,54,87,64,131,179,248,247,216,28,216,223,189,20,14,82,128,84,219,156,13,155,207]}';
// cipher.setAAD(aad, {
//   plaintextLength: Buffer.byteLength(plaintext)
// });

console.log(JSON.parse(plaintext).data);
const ciphertext = cipher.update(Buffer.from(JSON.parse(plaintext).data)  , 'utf8');
cipher.final();
const tag = cipher.getAuthTag();

// Now transmit { ciphertext, nonce, tag }.

const decipher = createDecipheriv('aes-192-ccm', key, nonce, {
  authTagLength: 16
});
decipher.setAuthTag(tag);
decipher.setAAD(aad, {
  plaintextLength: ciphertext.length
});
const receivedPlaintext = decipher.update(ciphertext, null, 'utf8');

try {
  decipher.final();
} catch (err) {
  console.error('Authentication failed!');
  return;
}

console.log(receivedPlaintext);