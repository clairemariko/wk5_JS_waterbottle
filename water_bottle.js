var waterBottle = {
    volume: 0,
    fill: function(){
        if (this.volume === 100){
        return "Full";
         }else{
        this.volume = 100;
         }
        return this.volume
       },

    drink: function(){
          if (this.volume-10 <= 0){
            return "Empty!"
          }else{
            this.volume -= 10;
          }
          return this.volume;
          
          },
    empty: function(){
      if (this.volume === 0){
        return "Already Empty!"
        } else { 
          this.volume = 0
        }
          return this.volume
        }
      };

module.exports = waterBottle