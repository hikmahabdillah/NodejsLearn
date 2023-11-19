//  Callback merupakan sebuah fungsi yang disisipkan pada argumen fungsi asynchronous dan akan dipanggil ketika proses dinyatakan selesai. Fungsi callback akan membawa nilai-nilai yang dihasilkan dari proses asynchronous sehingga kita bisa memanfaatkan nilai tersebut.
function getUsers(isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ["John", "Jack", "Abigail"];

    if (isOffline) {
      callback(new Error("cannot retrieve users due offline"), null);
      return;
    }

    callback(null, users);
  }, 3000);
}

function usersCallback(error, users) {
  if (error) {
    console.log("process failed:", error.message);
    return;
  }
  console.log("process success:", users);
}

// CALLBACK HELL
getUsers(false, usersCallback); // process success: ['John', 'Jack', 'Abigail']
getUsers(true, usersCallback); // process failed: cannot retrieve users due offline

function getUserWeather(userId) {
  try {
    const user = getUser(userId);
    const weather = getWeather(user.location);
    return { ...user, ...weather };
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

const userWeather = getUserWeather(1);
console.log(userWeather); // { id: 1, name: 'John Doe', location: 'Jakarta', weather: 'Sunny', temperature: 30 }
