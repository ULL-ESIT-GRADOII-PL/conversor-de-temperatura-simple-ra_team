# Práctica: Conversor en JavaScript de grados Celsius a Farenheit y viceversa
## ESIT ULL - Grado en Ingeniería Informática - Tercer Curso - Itinerario: Computación
## Team: Adrián Rodríguez Bazaga (AdrianBZG) & Rudolf Cicko (alu0100824780)

### Despliegue en github.io:
* [Click aquí](http://adrianbzg.github.io/PL_SimpleTemperatureConverter/temp.html)

### Ejecutar las pruebas

* [Click aquí](http://adrianbzg.github.io/PL_SimpleTemperatureConverter/tests/index.html)

### Diferencias con la versión en la rama `gh-pages`

* En el fichero `tests/index.html` de la rama `chainode` se muestran diversas formas de cargar el fichero `chai.js`:

         <!-- 
            <script src="chai.js"></script>
          -->
          <!--
            <script src=" http://chaijs.com/chai.js"></script> 
          -->
         <script src="../node_modules/chai/chai.js"></script> <!-- it works -->