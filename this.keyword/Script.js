var person = {
       firstName:"Rimol",
       lastName:"Chakma",
       id:19702056,
   fullName:function(){
   return this.firstName + "" + this.lastName ;
   }
 };
console.log(person.fullName());
