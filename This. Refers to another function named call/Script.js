var person1 = {
      fullName:function(){
    return this.firstName + "" + this.lastName;
 };
var person2 = {
          firstName:" john ",
          lastName:" Doe ",
      };
   var Calling = person1.fullName.call(person2);//Calling first and lastName from person2
//you can also use apply() instead of call 
   console.log(Calling);
    
