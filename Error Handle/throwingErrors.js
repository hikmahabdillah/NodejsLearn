// tidak error
/*
const json = '{ "name": "Yoda", "age": 20 }';

try {
  const user = JSON.parse(json);

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}
*/

// ERROR
/*
const json = "{ bad json }";

try {
  const user = JSON.parse(json);

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}
*/
// kode tsb akan mengalami syntax error, bagaimana jika error dri code tsb berbeda?

//  kita bisa menggunakan throw. Operator ini akan “melemparkan” eror pada program, sehingga eksekusi kode akan masuk pada blok catch.
/*
error ketika variable nama bernilai undefined
const json = '{ "age": 20 }';

try {
  const user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }

  console.log(user.name); // undefined
  console.log(user.age); // 20
} catch (error) {
  console.log(`JSON Error: ${error.message}`);
}
/* output
JSON Error: 'name' is required.
*/

// error ketika variable belum terdeklarasi
const json = '{ "name": "Yoda", "age": 20 }';

try {
  const user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }

  errorCode;

  console.log(user.name); // Yoda
  console.log(user.age); // 20
} catch (error) {
  console.log(`JSON Error: ${error.message}`);
}

/* output
JSON Error: errorCode is not defined
*/
// Eror berhasil ditangani, tetapi konsol tetap menampilkan pesan “JSON Error”, lantas bagaimana kita bisa menampilkan pesan eror sesuai eror yang muncul?
// dengan if statement.

/*
try {
  // ...
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
} */
// Dengan operator instanceOf, kita bisa mendapatkan tipe dari eror yang terjadi. Dari sana kita bisa membuat percabangan bagaimana cara menangani erornya.
