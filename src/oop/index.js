class Customer{
    constructor(id, customerNumber){
       
       this.id = id;
       this.customerNumber = customerNumber;

    }
}

let customer = new Customer(1, "12345");

customer.name = "Murat Kurtboğan" 
console.log(customer.name) 

Customer.classPrototyping = "ClassPrototyping" 
console.log(Customer.classPrototyping) 
console.log(customer.classPrototyping) 


console.log(customer.customerNumber) 



class IndivudualCustomer extends Customer{
    constructor(firstName, id, customerNumber){
        
        super(id, customerNumber)  
        this.firstName = firstName; 
    }
}

class CorporateCustomer extends Customer {
    constructor(companyName, id, customerNumber){
        
        super(id, customerNumber)  
        this.companyName = companyName; 
    }
}
