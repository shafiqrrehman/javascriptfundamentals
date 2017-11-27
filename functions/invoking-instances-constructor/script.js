var Dog = function() {
    let name, breed;
    console.dir(this);
}

firstDog = new Dog;
firstDog.name = "Rover";
firstDog.breed = "Doberman";

secDog = new Dog;
secDog.name = "Fluppy";
secDog.breed = "Poodle";

