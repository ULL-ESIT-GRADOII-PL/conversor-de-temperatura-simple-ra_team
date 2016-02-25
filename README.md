# Práctica: Conversor en JavaScript de grados Celsius a Farenheit y viceversa
## ESIT ULL - Grado en Ingeniería Informática - Tercer Curso - Itinerario: Computación
## Team: Adrián Rodríguez Bazaga (AdrianBZG) & Rudolf Cicko (alu0100824780)

### Despliegue en github.io:
* [Click aquí](http://ull-esit-gradoii-pl.github.io/conversor-de-temperatura-simple-ra_team/)

### Desarrolladores

#### Adrián Rodríguez Bazaga
  - Email: arodriba@ull.edu.es
  - [Página personal](http://adrianbzg.github.io)

#### Rudolf Cicko
  - Email: alu0100824780@ull.edu.es
  - [Página personal](http://alu0100824780.github.io)

#### Expresiones Regulares

Se ha hecho uso de:

* Anclas ^ y $.
* Paréntesis ( ), y especiales (?: ).
* Corchetes [ ] para los rangos.
* \d para los dígitos exponenciales.
* La opción: i, para que acepte mayúsculas o minúsculas.

#### Emmet

Para instalar Emmet en Atom, debemos ir a "Packages" -> "Settings View" -> "Install Packages/Themes", buscamos el paquete Emmet y le damos a Install.
![Emmet](http://files.catbox.moe/scbjix.png "Emmet")

#### ¿Cómo hemos ido probando que la expresión regular era correcta?

Utilizamos nodejs para comprobar con .exec("cadena") si la expresión regular detectaba correctamente las cadenas que debería.

### Diferencias con la versión en la rama `gh-pages`

* En el fichero `tests/index.html` de la rama `chainode` se muestran diversas formas de cargar el fichero `chai.js`:

         <!-- 
            <script src="js/chai.js"></script>
          -->
          <!--
            <script src=" http://chaijs.com/chai.js"></script> 
          -->
         <script src="../node_modules/chai/chai.js"></script> <!-- it works -->