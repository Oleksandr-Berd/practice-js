const howMuchILoveYou = (nbPetals) => {
  const phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
    
    
    
 return phrases[
   nbPetals > phrases.length
     ? nbPetals % phrases.length - 1
     : nbPetals - 1
 ];
}

console.log(howMuchILoveYou(203));

