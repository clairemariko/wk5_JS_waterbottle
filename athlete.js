
var athlete={
  name: "Andy Murray" ,

  hydration: 100,

  distance_covered: 0, 

  sweat: function(amount){
  return amount * 2
  },

  run: function(amount){
    var sweat = this.sweat(amount)
    var training = []
    if(this.enough_hydration(sweat)){
      training.push(this.hydration -= sweat);
      training.push(this.distance_covered += amount);
    return training;
    }else{
      return "NOT ENOUGH HYDRATION!"
    }
   },

   enough_hydration: function(amount){
   if (this.hydration - amount < 0){
    return false
   }
   return true
 },

};






module.exports = athlete