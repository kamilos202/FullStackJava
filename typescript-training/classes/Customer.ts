class Customer{
    private _firstName: string;
    private lastName: string;

    constructor(theFirst: string, theLast: string){
        this._firstName = theFirst;
        this.lastName = theLast;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string){
        this._firstName = value;
    }

}

let myCustomer = new Customer("John", "Smith");
 
myCustomer.firstName = "Kamil";
console.log(myCustomer.firstName);
