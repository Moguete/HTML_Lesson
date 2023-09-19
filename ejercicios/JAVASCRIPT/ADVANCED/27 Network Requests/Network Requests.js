async function createNewPost() {
    try {
      const url = 'https://jsonplaceholder.typicode.com/posts'; 
      const data = {
        title: 'Título del nuevo post',
        completed: true,
      };
  
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.status === 201) {
        console.log('Nuevo post creado exitosamente.');
      } else {
        console.error('Error al crear el nuevo post.');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  createNewPost();