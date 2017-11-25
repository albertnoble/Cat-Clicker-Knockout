var cats = [
    {
        count: 0,
        name: "Bob",
        img: "images/cat1.jpg",
        names: ['AlexMan', 'Dunken', 'Apples','Nugget']
    },
    {
        count: 0,
        name: "Dylan",
        img: "images/cat2.jpg",
        names: ['Harp']
    },
    {
        count: 0,
        name: "Maria",
        img: "images/cat3.jpg",
        names: ['Harpy']
    },
    {
        count: 0,
        name: "Abraham",
        img: "images/cat4.jpg",
        names: ['Lincoln']
    },
    {
        count: 0,
        name: "ZebroWiskey",
        img: "images/cat5.jpg",
        names: ['ZW']
    }
];

var catView = function(){
    var self = this;
    
    this.catList = ko.observableArray([]);
    
    cats.forEach(function(catItem){
        self.catList.push(new Cat(catItem));
        
    });
    
    this.currentCat = ko.observable(this.catList()[0]);  

    this.incrementCounter = function(){
        self.currentCat().count(self.currentCat().count() + 1);
    };
    
    this.setCat = function(clickedCat){
        self.currentCat(clickedCat);
    };
        
};

var Cat = function(data){
    
    this.name = ko.observable(data.name);
    this.img = ko.observable(data.img);
    this.count = ko.observable(data.count);
    this.names = ko.observable(data.names);
    
    this.levels = ko.computed(function(){
        var stages = ["Baby", "Infant","Kid","Teen","Adult","Senior"];
        var num = this.count()/10;
        if(num > 10){
            return "Grand Master";
        }else if(num > 5){
            return stages[5];
        }else{
            return stages[parseInt(num)];
        }
    }, this);
    
};

ko.applyBindings(new catView());