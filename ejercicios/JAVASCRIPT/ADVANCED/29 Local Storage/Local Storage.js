const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUserToLocalStorage() {
  try {
    localStorage.setItem("user", JSON.stringify(user));
    console.log("Usuario guardado en localStorage correctamente.");
  } catch (error) {
    console.error("Error al guardar el usuario en localStorage:", error);
  }
}

saveUserToLocalStorage();

function getUserFromLocalStorage() {
  try {
    const userJSON = localStorage.getItem("user");

    const user = JSON.parse(userJSON);

    if (user) {
      console.log("Usuario recuperado de localStorage:");
      console.log(user);
    } else {
      console.log("No se encontraron datos de usuario en localStorage.");
    }
  } catch (error) {
    console.error("Error al recuperar el usuario de localStorage:", error);
  }
}

getUserFromLocalStorage();
