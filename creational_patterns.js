var PeopleFactory = function(name, age, state) {
  var temp = {};

  temp.age = age;
  temp.name = name;
  temp.state = state;

  temp.printPerson = function() {
    console.log(`${this.name}:${this.age}:${this.state}`);
  }

  return temp;
};
/* let me = new PeopleFactory('sigfried', 28, 'CF');
let pandushka = new PeopleFactory('pandushka', 32, 'STP')

me.printPerson();
pandushka.printPerson(); */
var PeopleConstructor = function(name, age, state) {
    this.name = name;
  this.age = age;
  this.state = state;
  
  this.printPerson = function () {
    console.log(`${this.name}: ${this.age}: ${this.state}`);
  }
};
/* var me = new PeopleConstructor('sigfried', 28, 'CF');
var eva = new PeopleConstructor('pandushka', 32, 'STP');

me.printPerson();
eva.printPerson(); */
var PeopleProto = function() {

};
PeopleProto.prototype.age = 0;
PeopleProto.prototype.name = 'no name';
PeopleProto.prototype.state = 'No city';

PeopleProto.prototype.printPerson = function () {
  console.log(`${this.name}:${this.age}:${this.state}`);
};
/* 
var me = new PeopleProto();
me.name = 'sigfried';
me.age = 28;
me.state = 'CF';
console.log('name' in me);
console.log(me.hasOwnProperty('name'));
me.printPerson(); */

var PeopleDynamicProto = function(name, age, state) {
    this.age = age;
  this.name = name;
  this.state = state;
  
  if (typeof this.printPerson !== 'function') {
    PeopleDynamicProto.prototype.printPerson = function () {
      console.log(`${this.name}:${this.age}:${this.state}`);
    };
  }
};

var me = new PeopleDynamicProto('sigfried', 28, 'CF');
me.printPerson();
