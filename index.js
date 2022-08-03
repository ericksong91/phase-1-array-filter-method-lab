//Defining Driver Lists

const drivers = [
    'Bobby', 
    'Sammy', 
    'Sally', 
    'Annette', 
    'Sarah', 
    'Bobby'
   ]

const drivers2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

//This function takes an array of drivers' names and a string as arguments, 
//and returns the matching list of drivers. The function should be case insensitive.

function findMatching(collection, string){
    const result = collection.filter(
        nameSearch => nameSearch.toLowerCase() === string.toLowerCase()
        )
    return result 
}

console.log(findMatching(drivers, "Bobby"))

//This function takes an array of drivers' names and a string as arguments for querying the array, 
//and returns all drivers whose names begin with the provided letters.

function fuzzyMatch(collection, string){
    const result = collection.filter(
        letterSearch => letterSearch.startsWith(string)
    )
    
    return result
}

console.log(fuzzyMatch(drivers, "A"))
console.log(fuzzyMatch(drivers, "Sa"))

//matchName - This function takes an array of driver objects and a string as arguments. 
//Each driver object has two properties: name and hometown. 
//The function should return each element whose name property matches the provided string argument

function matchName(collection, string){
    const result = collection.filter(
        returnData => returnData.name === string
    )
    
    return result
}

console.log(matchName(drivers2, "Bobby"))