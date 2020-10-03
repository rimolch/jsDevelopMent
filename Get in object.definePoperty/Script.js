var person = {
      firstName : " John ",
      lastName : " Doe "
      };
Object.defineProperty(person,"fullName",{ get : function(){
return this.firstName + "" + this.lastName ;
}
});
console.log(person.fullName);
     
     
