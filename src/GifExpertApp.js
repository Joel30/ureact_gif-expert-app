import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = ({defaultCategories = []}) => {

  const [categories, setCategories] = useState(defaultCategories);

  // const handleAdd = () => {
  //   let newData =  'HunterXHunter';
  //   // setCattegories([...categories, newData]);
  //   setCattegories((cat) => [...cat, newData]);
  // }
  
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr/>


      <ol>
        {
          categories.map((category) => (
            <GifGrid 
              key={category}
              category={category}
            />
          ))
        }
      </ol>
    </>
  );
}

//Desplegando aplicación en Github Pages
/**
 * 1: Crear el archivo 'build' y cambiarlo a 'docs'
 * 2: Crear un repositorio público en React
 * 3: Ir Settings -> bajar hasta 'GitHub Pages' -> dropdow en (master branch / docs folder)
 * 4: Esperar a que se cree el enlace en el mismo lugar de (3:)
 * 5: Para arreglar errores de archivos no encontrados 
 *     -> entrar a docs
 *     -> index.html (command palet -> Format Document : para trabajar mas fácil)
 *     -> cambiar los 'href' de (/) a (./)
 *     -> subir los cambios a GitHub
 * 6: En settings (github) esperar de nuevo el link.
 */

//Alternativas para el paso 5:
/**
 * 1: En el archivo 'package.json' ingresar:[ "homepage" : ".", ] 
 * 1.1: O apuntar al repositorio de GitHub en lugar de '.'
 * 2: Crear un script js para crear la carpeta 'docs' en lugar de 'build'
 *    -> "build-and-docs": "react-scripts build && node create-docs.js",
 * 
 * 2.1: O modificar el script 'build':
 *    -> "build": "react-scripts build && rm -rf docs && mv build docs",
 */

export default GifExpertApp;