let user = {
    name: "Cosimo",
    age: 30,
    };
    
    let newUser = Object.assign({}, user);
    
    newUser.name = "Paolo";
    
    console.log(newUser);
    console.log(user);

    // Hay que asignar las propiedades del antiguo objeto al nuevo, ya que solamente con el = lo que hacemos es apuntar hacia ese primer objeto en vez de copiarlo.
    