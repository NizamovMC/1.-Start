

jackObject = {
    name: 'Jack', 
    lastname: 'Black', 
    weight: 79, 
    height: 1.70, 
    calcbmi: function() {
        this.bmi = this.weight / (this.height * this.height);
        return this.bmi;
    },
};


mikeObject = {
    name: 'Mike', 
    lastname: 'White', 
    weight: 91, 
    height: 1.93, 
    calcbmi: function() {
        this.bmi = this.weight / (this.height * this.height);
        return this.bmi;
    },
};
    const gudJob = ``
    //calcAge: function(birthYear) {
     //   return 2022 - birthYear;
    //}
    console.log(jackObject);
    console.log(jackObject.calcbmi());
    console.log(mikeObject);
    console.log(mikeObject.calcbmi());
    console.log(`Jack White BMI ${ackjObject.calcbmi()} is higher than Mike Black ${mikeObject.calcbmi()}!`);