
class BankAccount{
	constructor(balance){
		this.balance = typeof balance ==='number' ? balance:0;

	}
	set balance(val){
		this._balance= val;
		this.balanceupdatedat=new Date();
	}
	get balance(){
		return this._balance;
	}
	deposit(amount){
		if(typeof amount ==='number'){
			this.balance+=amount;
			return true;
		}
		else{
			console.log("amount must be a number");
			return false;
		}
	}

	withdrawl(amount){
		if(typeof amount ==='number'){
				this.balance-=amount;
				return this.balance;
		}else{
			console.log("amount must  be a number");
		}
	}

	printBalance(){
		console.log(`your balance is ${this.balance}! lastupdated at ${this.balanceupdatedat}.`);
	}
}
class savingaccount extends BankAccount{
	deposit(amount){
		if(super.deposit(amount)){
		console.log(`Congratz! you have saved $ ${amount}`);
		}
		else{
			console.log("u suck learn ur numbers");
		}
	}
	withdrawl(){
			console.log("ur not allowed dumbass!");
	}

}


var savings=new savingaccount(500);
savings.deposit(100);
savings.printBalance();
savings.withdrawl(25);
savings.printBalance();



// var account= new BankAccount(100);
// account.deposit(100);
// account.withdrawl(10);
// account.printBalance();

// var account2= new BankAccount('dfgsdfdsf');
// account2.deposit('Bruno');
// account2.withdrawl(true);
// account2.printBalance();