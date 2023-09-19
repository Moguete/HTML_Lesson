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