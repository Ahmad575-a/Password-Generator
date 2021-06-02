

// Use below character set to hash the password
/* const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_'; */


/* let num = (Math.floor(Math.random()*16))+1;

console.log(num); */

const charset = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "!",
    "§",
    "$",
    "%",
    "&",
    "/",
    "(",
    ")",
    "=",
    "?",
    "#",
    ",",
    ";",
    ".",
    ":",
    "-",
    "_",
  ];
  let screen = document.querySelector("#output");
  let characterAmount = document.querySelector("#length");
  let generateButton = document.querySelector("#btn-generate");
  /* let iterator = Number(characterAmount.value); */
  function passwordGenerator(e) {
    e.preventDefault();
    screen.innerText = "";
    let character;
    for (let i = 0; i < characterAmount.value; i++) {
      character =
        charset[Math.floor(Math.random() * (charset.length - 1))];
        if(character[i]%3===0){
            screen.append(character.toUpperCase());
        }else{screen.append(character);}
      
    }
  }
  generateButton.addEventListener("click", passwordGenerator);