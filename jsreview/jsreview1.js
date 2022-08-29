// Javascript Review
  
// 1. Variables and Datatypes
  // A. Q + A
    // 1. How do we assign a value to a variable
    /* Answer: by using let or const to declare a varible and using equal sign to assign its value*/
    
    // 2. How do we change the value of a variable
    /* Answer : redeclare varible in a different block */

    // 3. how do we assign an existing variable to a new variable
    /* Answer: declare varible without using let or const and use equal sign to reassign new varible */

    //4. what are declare, assign and define
    /* Answer: let x = 15 , let is declaring the variable, x is defining the varible, and assigned to the varible is 15 */
    
    //5. what is pseudocoding and why should you use it
    /* Answer: simple way to describe a set of instructions, has own syntax. very similar to programming language.

    //6. what percentage of time should be spent thinking about how you are going to solve a problem vs actually typing in code to solve it?
    /* Answer: 90% */


//2. Strings
   //1. and 2.
    let firstVariable = "Hello World!"
   //3.
    firstVariable = 200
    //4.
    let secondVariable = firstVariable;
    //5.
    secondVariable = "I am Batman!"
    
    //6.  200

    //7. 
    let yourName = 'joshua';

    //8.
    console.log(`Hello, my name is ${yourName}.`)


//3. Booleans

   const a = 4;
   const b = 53; 
   const c = 57;
   const d = 16;
   const e = 'Kevin'

   console.log(a !== b);
   console.log(c !== d);
   console.log('Name' === 'Name');

   console.log(true !== false);
   console.log(false || false || false || false || false || true);
   console.log(false === false);
   console.log(e === 'Kevin');
   console.log(a + b === c);
   console.log(a * a === d);
   console.log(48 !== '48');


//4.The Farm

  let animal = 'cow';
  if (animal === 'cow') {
    console.log('moooo');
  } else {
    console.log('Hey you are not a cow')
  }
  console.log()


// 5. Driver's ED.

  let age = 17;
  if(age >= 17) {
    console.log('Here are the keys!')
  } else {
    console.log('Sorry, you are too young')
  }

 

//6. Loops
  //basics

  for(let i = 0; i <= 10; i++) {
        console.log(i)
  }

  for(let i = 10; i <= 400; i ++ ) {
    console.log(i)
  }

  for(let i = 12; i <= 4000; i+=3) {
    console.log(i)
  }

  //Get even

    for(let i = 0; i <= 100; i++){
        if(i % 2 === 0)
        console.log(i + ' is an even number')
    }

// give me five

for(let i = 0; i <= 100; i++) {
    if(i % 5 === 0)
    console.log('I found a ' + i + ' High Five!')    
    if(i % 3 === 0)
    console.log('I found a ' + i + ' Three is a crowd')
    if(i % 15 === 0)
    console.log(' I found a ' + i + ' High Five' + ' Three is a crowd')
}


//Arrays and Control flow
// A. Talk about it 
    //1. The things in an array is called elements
    //2. yes
    //3. grocery list, list of names, etc.

//B. Easy Does It
    let quotes = ['If your not first, your last - Ricky bobby', 'There is no i in team, but there is an i in Win - michael jordan', 'ya style is regular -Shady Mccoy']
    console.log(quotes)

//C. Accessing Elements
    let randomThings = [1, 10, "Hello", true]
    //console.log(randomThings[0]) // access the ifrst element by putting its index which is 0
    let index = randomThings.indexOf("Hello");
    randomThings.splice(index, 1, 'World')
    console.log(randomThings)

//D. Change values
    const ourClass = ['salty', 'zoom', 'sardine', 'slack', 'github']
    const index1 = ourClass.indexOf('github');
    ourClass.splice(index1, 1,'octocat' )
    ourClass.push('cloud city')
    console.log(ourClass)
    console.log(ourClass[2]) // to access 3rd element in array


//E. Mix it up
const myArray = [5, 10, 500, 20]
myArray.push('Aegon')
console.log(myArray)
myArray.push('bing bong')
console.log(myArray)
myArray.shift(0)
console.log(myArray)
myArray.unshift('bob marley')
console.log(myArray)
myArray.pop(5)
console.log(myArray)
myArray.reverse()
console.log(myArray)

// F. Biggie Smalls
function testNum  (a) {
    let result;
    if (a > 100) {
      result = ' big number';
    } else {
      result = 'little number';
    }
    return result;
  }
  
  console.log(testNum(623));
  

//G. monkey in the middle
function testNum2 (b) {
    let result2;
    if (b < 5) {
        result2 = 'little number'
    } else {
        if ( b > 10) {
            result2 = 'big number'
        } else {
            return 'monkey';
        }
    }
}

console.log(testNum2(7));

//H. Whats in your closet?

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];

const tomsCloset = [
    [
    "grey button-up",
    "dark-grey button-up",
    "light blue button-up",
    "blue button-up"
], [
    "grey jeans",
    "jeans",
    "pjs"
], [
    "wool mittens",
    "wool scarf",
    "raybans"
    ]
];

console.log("kristyn is rocking that " + kristynsCloset[2] + " today!")
kristynsCloset.splice(6, 7, 'raybans')
console.log(kristynsCloset)
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset)

 tomsCloset[0][0];
 tomsCloset[0][3];
 tomsCloset[1][2];
 console.log('Tom is looking fierce in a ' + tomsCloset[0][0] + ', ' + tomsCloset[0][1] + ' and ' + tomsCloset[2][1] + '!');
 tomsCloset[1][2] = 'Footie Pajamas';
  

//Functions


function printGreeting (name){
  return "Hello there, " + name + "!";
}
console.log(printGreeting("joshua"));



function printCool (name){
 return name + " is super cool!";
}
console.log(printCool('kyrie irving'));



function calculateCube(num){
 return num * num * num 
}
console.log(calculateCube(5));



function isVowel(char){
 if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char =='u'){
     return true
     
 } 
 else {
     return false
 }
 
}
console.log(isVowel('c'));



function getTwoLenghts(str1, str2){
 let Arr =[str1.length, str2.length]
 return Arr;
 
}
console.log(getTwoLenghts("Mighty", "Pneumonoultramicroscopicsilicovolcanoconiosis"));



function getMultipleLenghts(arrStr){
 let length = [];
 for (let i = 0; i < arrStr.length; i++){
     length.push(arrStr[i].length)
 }
    return length
}
console.log(getMultipleLenghts(['Hello', 'You', 'Are', 'My', 'Sworn', 'Enemy']));



function maxOfThree(var1, var2, var3){
 if (var1 >= var2) {
      if (var1 >= var3) {
              return var1;
     } else {
             return var3;
             }
         } else {
             if (var2 >= var3) {
                 return var2;
             } else {
                 return var3;
             }
         }
 
}
console.log(maxOfThree(12,10,27));

function printLongestWord (strArr) {
 let longest = strArr[0];
 for (let i = 1; i < strArr.length; i++) {
     if (longest.length == strArr[i].length) {
         
     } else if (longest.length < strArr[i].length) {
         longest = strArr[i];
     }
 }
 return longest;
}
console.log(printLongestWord(['BoJack', 'Princess', 'Diane', 'a', 'Max', 'Peanutbutter', 'big']));


// Objects

let user = {
 name: 'josh',
 age: 25,
 email: 'joshuamorrison623@gmail.com',
 purchased:[]

}

user.email= 'jdogm34@gmail.com';
user.age++;
user.location = 'jersey shore';
user.purchased.push('carbohydrates');
user.purchased.push('Peace of Mind');
user.purchased.push('Merino jodhpurs');
console.log(user.purchased[2]);


user.friend = {
 name: 'lebron james',
 age: 38,
 location: 'cleveland',
 purchased:[]
}
console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push('The One Ring');
user.friend.purchased.push('A latte');
console.log(user.friend.purchased[1]);

for(i = 0; i < user.purchased.length; i++){
 console.log(user.purchased[i]);
}

for(j = 0; j < user.friend.purchased.length; j++){
 console.log(user.friend.purchased[j]);
}

function updateUser(){
 user.age++;
user.name = user.name.toUpperCase();
}
console.log(user);

function oldAndLoud(person){
 person.age++;
 person.name = person.name.toUpperCase();
}
oldAndLoud(user);
console.log(user);

//Cat Combinator 
cat1 = {
 name: ' parlay ',
 breed: ' tuxedo ',
 age: 4
}
console.log(cat1.age);
console.log(cat1.breed);


let cat2 = {
 name: ' minks ',
 breed: ' tabby ',
 age: 6
}


function combineCats(mama, papa){
 let Kitty = {
     name: mama.name + papa.name,
     age: 1,
     breed: mama.breed + '-' + papa.breed
 }
 return Kitty;
}
console.log(combineCats(cat1, cat2));
console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));




