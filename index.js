function restaurantPairScores(restaurants){
  let scores=[];
  for(let i=0;i<restaurants.length-1;i++){
    for(let j=i+1;j<restaurants.length;j++){
     scores.push(restaurants[i]+restaurants[j]+i-j);
    }
  }
  // console.log(scores);
  return [Math.min(...scores),scores.reduce((a,b) => a + b, 0)/scores.length,Math.max(...scores)];
}
console.log(restaurantPairScores([8,1,5,2,6]));
console.log(restaurantPairScores([1,2]));