var catView = function(){
    
    this.currentCat = ko.observable(new Cat());  

    this.incrementCounter = function(){
        this.count(this.count() + 1);
    };
        
};

var Cat = function(){
    
    this.name = ko.observable("Bob");
    this.img= ko.observable("images/cat1.jpg");
    this.count = ko.observable(0);
    this.names = [
        { nickname: 'AlexMan'},
        { nickname: 'Dunken'},
        { nickname: 'Apples'},
        { nickname: 'Nugget'},
        { nickname: 'Charles C. At'}
    ];
    
    this.levels = ko.computed(function(){
        var stages = ["Baby", "Infant","Kid","Teen","Adult","Senior"];
        var num = this.count()/10;
        console.log(num);
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