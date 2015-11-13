function AquaponiaComponent(name, capacity, dimensions, elementColor, waterLevel) {

  this.elementName  = name;
  this.capacity     = capacity;
  this.dimensions   = dimensions;
  this.elementColor = elementColor;
  this.waterLevel   = waterLevel;

  this.waterOutput = function(waterToRemove, whereTo) {


    if (waterToRemove <= this.waterLevel) {
      this.waterLevel =  this.waterLevel - waterToRemove;
      console.log('Has sustraído: ' + waterToRemove + '\n' + 'Nivel actual:' + this.waterLevel);

      if(whereTo !== 'outside' && whereTo !== 'undefined'){
        whereTo.waterInput(); //Podría incluir un array de componentes y así saber cuáles son los destinos posibles
      }

    } else{
      console.log('Quieres quitar: ' + waterToRemove + ', pero solo hay ' + this.waterLevel +' agua. ¿Quieres introducir agua en este componente? (this.waterInput)');
    }
  };

  this.waterInput = function(waterInput, whereTo) {
    if (whereTo.waterLevel + waterInput <= whereTo.capacity) {
      whereTo.waterLevel =+ waterInput;
      console.log('Nivel actual:' + this.waterLevel + '\n' + 'Has agregado: ' + waterInput);
    } else{
      console.log('Estás intentando meter demasiada agua.');
    }
  };

  this.levelWatcher = function() {
    setTimeout(function() {
      if (this.capacity > waterLevel - 10){
        this.waterOutput(5, 'outside');
        console.log('WATCHER! Nivel actual: ',this.capacity);
      }
    }, 6000);
  };
}

var tanque = new AquaponiaComponent('tanque', 40, {a: 51, b: 25.5, c: 30.5}, "Gris Claro", 0);
var cama   = new AquaponiaComponent('cama', 10, {a: 51, b: 25.5, c: 10}, "Rojo", 0);


tanque.waterOutput(30, cama);
tanque.waterInput(10, cama);
tanque.waterOutput(15, cama);


