# Práctica: Conversor en JavaScript de grados Celsius a Farenheit y viceversa
## ESIT ULL - Grado en Ingeniería Informática - Tercer Curso - Itinerario: Computación
## Team: Adrián Rodríguez Bazaga (AdrianBZG) & Rudolf Cicko (alu0100824780)

### Despliegue en github.io:
* [Click aquí](http://adrianbzg.github.io/PL_SimpleTemperatureConverter/index.html)

### Desarrolladores

#### Adrián Rodríguez Bazaga
  - Email: arodriba@ull.edu.es
  - [Página personal](http://adrianbzg.github.io)

#### Rudolf Cicko
  - Email: alu0100824780@ull.edu.es
  - [Página personal](http://alu0100824780.github.io)

### Diferencias con la versión en la rama `master`

* En la rama `html5pattern` el tag `<input>` se metió dentro de una form.

        <form id="formulario" onsubmit="convert();">

  mientras que en la rama `master` estaba fuera 

* Además el `<input>` está controlado con el atributo `pattern` HTML5 de `<input>`:

        <input id="original"
               placeholder="40C"
               size="50"
               title = "You should read the 'Usage' and the 'Input examples' sections"
               pattern="^(([-+]?\d+(?:\.\d*)?(?:e[-+]?\d+)?)\s*((?:[fF](?:[aA](?:[rR](?:[eE](?:[nN](?:[hH](?:[eE](?:[iI](?:[tT])?)?)?)?)?)?)?)?)|(?:[cC](?:[eE](?:[lL](?:[sS](?:[iI](?:[uU](?:[sS])?)?)?)?)?)?)|(?:[kK](?:[eE](?:[lL](?:[vV](?:[iI](?:[nN])?)?)?)?)?))$)"
        />

* El fichero `pattern.html` tiene ejemplos de como usar el atributo `pattern`

          <form>
            <fieldset>
              <p><label>Caracteres alfanuméricos:</label><input type="text" pattern="[a-zA-Z0-9]+" /></p>
              <p><label>Letras:</label><input type="text" pattern="[a-zA-Z]+" /></p>
              <p><label>Números:</label><input type="text" pattern="[0-9]+" /></p>
              <p><label>Fecha (dd/mm/YYYYYY):</label><input type="text" pattern="(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d" /></p>
              <p><label>Email:</label><input type="text" pattern="[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]+" /></p>
              <input id="final" type="submit" value="Aceptar" />
            </fieldset>
          </form>

* En esta rama en `convert.js` se usa `alert` para enviar los mensajes en vez de insertarlos en la página con el método `innerHTML`.

* Véase también [HTML `<input>` pattern Attribute in W3Schools](http://www.w3schools.com/tags/att_input_pattern.asp)
