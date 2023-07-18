             ******************************Person Class to Hold All Details****************************

function Person() {
    this.firstName = "unknown";
    this.lastName = "unknown";
}

var person1 = new Person();
person1.firstName = "Steve";
person1.lastName = "Jobs";
            
alert(person1.firstName + " " + person1.lastName);

var person2 = new Person();
person2.firstName = "Bill";
person2.lastName = "Gates";
            
alert(person2.firstName + " " + person2.lastName );



In the above example, a Person() function includes firstName, lastName & age variables using this keyword. 
These variables will act like properties. As you know, we can create an object of any function using new keyword, 
so person1 object is created with new keyword. So now, Person will act as a class and person1 & person2 will be its objects 
(instances). Each object will hold their values separately because all the variables are defined with this keyword which
 binds them to particular object when we create an object using new keyword.

 So this is how a function can be used like a class in the JavaScript.