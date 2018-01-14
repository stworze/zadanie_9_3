var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCase = dinosaur.toUpperCase();
var textReplace = text.replace('Velociraptor', dinosaurUpperCase);
var cutTextReplace = textReplace.length/2;
var sliceTextReplace = textReplace.slice(0,cutTextReplace);
console.log(sliceTextReplace);
