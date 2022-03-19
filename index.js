class Breakfast {
    constructor (food, drink){
        this.food = food;
        this.drink = drink;
    }
}

class Lunch {
    constructor (salad, soup, drink) {
        this.salad = salad;
        this.soup = soup
        this.drink = drink;
    }
}

class Dinner {
    #dessert = 'creme brule';
    constructor (salad, soup, entree){
        this.salad = salad;
        this.soup = soup;
        this.entree = entree
    }
}

const newDinner = new dinner ('steak', 'wine', 'creme brulee');
console.log(newDinner)