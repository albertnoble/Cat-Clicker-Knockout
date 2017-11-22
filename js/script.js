var catView = function(){
    
        this.catNameElem = ko.observable("Bob");
        this.catImageElem = ko.observable("images/cat1.jpg");
        this.countElem = ko.observable(0);

        this.incrementCounter = function(){
            this.countElem(this.countElem() + 1);
        };
        
        this.levels = ko.computed(function(){
            var stages = ["Baby", "Infant","Kid","Teen","Adult","Senior"];
            var num = this.countElem()/10;
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