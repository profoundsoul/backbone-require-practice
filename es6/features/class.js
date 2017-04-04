class Book{
	constructor(isbn){

	}
	getBookISBN(){
		return 'UC023023252'
	}
	getBookName(){
		return 'bookName';
	}
	getProductDate(){
		return new Date();
	}
	getPrice(){

	}
}

class SocialBook extends Book{
	constructor(ibsn, who){
		super(ibsn);
	}
	getPrice(){
		super.getPrice();
	}
}

