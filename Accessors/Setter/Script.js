var person = { 
              firstName: " John ",
              lastName: " Doe ",
              language: "",
             set lang(lang){
             return this.langusge = lang.toUppercase();
             }
          };
  person.lang = "my name is John Doe";
console.log(person.lamguage);
