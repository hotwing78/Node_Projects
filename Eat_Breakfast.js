function haveBreakfast(food, drink, callback){
  console.log('Having breakfast of ' + food + ', ' + drink);
  if(callback && typeof(callback) === 'function'){
    callback();
  }
}

haveBreakfast('eggs','coffee', function(){
  console.log('Finished breakfast time to make the doughnuts!');
});
