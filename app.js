let favoriteCityId = "rome";
console.log(favoriteCityId);

favoriteCityId = "paris";
console.log(favoriteCityId);

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];

console.log(citiesId);

// citiesId = ["paris", "nyc", "rome", "rio-de-janeiro", "tokyo"];



console.log(citiesId);

// citiesId = [];
//TypeError: Assignment to constant variable.



function getWeather() {
	
	let city = favoriteCityId.toUpperCase();
	let temperature = 20;
	
	return {city, temperature};
	
}

const weather = getWeather(favoriteCityId);

console.log(weather);




const city = weather;
const temperature = weather;

console.log(city); 
console.log(temperature);


const [parisId, nycId, ...othersCitiesId] = citiesId;

console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);



class Trip {
    constructor(id,name,imageUrl, price) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
    }
	
	 get price() {
        return this._price;
    }
	
	set price(newPrice) {
		this._price = newPrice;
	}
	
	static getDefaultTrip() {
    // return "Trip [" + this.id + ", " + this.name + ", " + this.imageUrl + ", " + this.price + "]";
	return rioTrip;
}
	
	toString() {
		return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this.price}]`;
	}
		
}



let parisTrip = new Trip('paris','Paris', 'img/paris.jpg');

// console.log(parisTrip);


console.log(parisTrip.name); // Paris


// console.log(parisTrip.toString());


parisTrip.price = 100;


console.log(parisTrip.toString());


let rioTrip = new Trip('rio-de_janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');




const defaultTrip = Trip.getDefaultTrip();

console.log(defaultTrip.toString());



class FreeTrip extends Trip {
	 constructor(id, name, imageUrl, price) {
        super(id, name, imageUrl);
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
		this.price = price;
    }
	
	toString() {
		return "Free" + super.toString();
	}
		
}

const freeTrip  = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg', 0);

console.log(freeTrip.toString());


console.log(freeTrip.toString());






class TripService {

    constructor(id, name, imageUrl) {
        // TODO Set of 3 trips
        //
        // new Trip('paris', 'Paris', 'img/paris.jpg')
        // new Trip('nantes', 'Nantes', 'img/nantes.jpg')
        // new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
			
	let paris = {id: 'paris', name: 'Paris', imageUrl: 'img/paris.jpg'};
	let nantes = {id: 'nantes', name: 'Nantes', imageUrl: 'img/nantes.jpg'};
	let rio = {id: 'rio-de-janeiro', name: 'Rio de Janeiro', imageUrl: 'img/rio-de-janeiro.jpg'};
	
	let villes = new Set();
	set.add(paris);
	set.add(nantes);
	set.add(rio);
	
	
    }
	
	
		/*
        new Trip('paris', 'Paris', 'img/paris.jpg');
        new Trip('nantes', 'Nantes', 'img/nantes.jpg');
        new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');
		*/
	


    findByName(tripName) {

         return new Promise((resolve, reject) => {

             setTimeout( (/*fn,delay*/) => {
                 // ici l'exécution du code est asynchrone

                 // TODO utiliser resolve et reject en fonction du résultat de la recherche
                 let array = Array.from(this.trips);
                 let find = array.find(function(e) {
                   return e.name == tripName;
                 });
                 if (find) {
                   resolve(find);
                 } else {
                   reject("pas de trip avec ce nom :"+ tripName);
                 }
             }, 2000)
        });
    }
}

class PriceService {

    constructor(identifiantVoyage, prix) {
        // TODO Map of 2 trips
        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        // no price for 'nantes'
		let villes = new Map();
	
	villes.set('20',rio);
	villes.set('5',paris);
    }
	
	/*
	rio = {identifiantVoyage: '', prix: '20'};
	paris = {identifiantVoyage: '', prix: '5'};
	*/
	
	

    findPriceByTripId(tripId) {

       return new Promise((resolve, reject) => {

                    setTimeout( () => {
                        // ici l'exécution du code est asynchrone

                        // TODO utiliser resolve et reject en fonction du résultat de la recherche

                        let find = this.prices.get(tripId);
                        if (find) {
                          resolve("Price - found :"+find );
                        } else {
                          reject("No price found for id :" + tripId);
                        }

                    }, 2000)
               });
    }
}


