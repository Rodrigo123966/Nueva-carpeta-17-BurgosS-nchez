const URL = "https://dummyjson.com/products";

export const obtenerProductos = async () => {
  try {
    const respuesta = await fetch(URL);

    if (!respuesta.ok) {
      throw new Error("Error al obtener los productos");
    }

    const datos = await respuesta.json();

    return datos.products;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};