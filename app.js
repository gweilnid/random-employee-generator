// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  // +1 je proto aby interval nebyl [min, max) ale [min, max]
  const DELTA = 1;
  return Math.floor(Math.random() * (max - min + DELTA) + min);
}


function getGender(){
  const genders = ["female", "male"];

  return genders[getRandomInt(0,genders.length-1)];
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
function getBirthday(minYear, maxYear){
  const firstDay = 1;
  const firstMonth = 0;
  const lastMonth = 11;
  const currentYear = new Date().getFullYear();
  const year = getRandomInt(currentYear -  maxYear, currentYear - minYear);
  const month = getRandomInt(firstMonth, lastMonth);
  const day = getRandomInt(firstDay, new Date(year, month + 1, 0).getDate());
  //console.log(year);
  // Aby čas byl vždycky T00:00:00.000Z
  const birthday = new Date(Date.UTC(year, month, day));
  
  return birthday.toISOString();
}  

function getFemaleName(){
  const femaleNames = [
    "Natálie", "Jana", "Eva", "Anna", "Hana", "Lenka", "Kateřina", "Věra", "Lucie", "Tereza",
    "Petra", "Martina", "Jitka", "Ludmila", "Helena", "Michaela", "Alena", "Dana", "Ivana", "Monika",
    "Jarmila", "Veronika", "Zdeňka", "Nikola", "Gabriela", "Božena", "Eliška", "Irena", "Klára", "Alice",
    "Barbora", "Margita", "Andrea", "Dagmar", "Šárka", "Zuzana", "Vlasta", "Katarína", "Jaroslava", "Simona",
    "Daniela", "Kristýna", "Olga", "Radka", "Blanka", "Iva", "Renata", "Romana", "Růžena", "Aneta"
  ];

  return femaleNames[getRandomInt(0,femaleNames.length-1)];
}

function getFemaleSurname(){
  const femaleSurnames = [
    "Nováková", "Svobodová", "Novotná", "Dvořáková", "Černá", "Procházková", "Kučerová", "Veselá", "Horáková", "Němcová",
    "Marková", "Pospíšilová", "Pokorná", "Hájková", "Jelínková", "Králová", "Růžičková", "Benešová", "Fialová", "Sedláčková",
    "Doležalová", "Zemanová", "Kolářová", "Navrátilová", "Čermáková", "Vaněková", "Urbanová", "Blahová", "Křížová", "Kopecká",
    "Konečná", "Malá", "Holubová", "Abrahámová", "Adamová", "Bartáková", "Dostálová", "Eliášová", "Filipová", "Gregorová",
    "Hejnová", "Chalupová", "Jandová", "Kafková", "Langerová", "Machová", "Nová", "Odehnalová", "Pánková", "Říhová"
  ];

  return femaleSurnames[getRandomInt(0,femaleSurnames.length-1)];
}

function getMaleName(){
  const maleNames = [
    "Jiří", "Jan", "Petr", "Josef", "Pavel", "Martin", "Jaroslav", "Tomáš", "Miroslav", "František",
    "Karel", "Václav", "Michal", "Lukáš", "David", "Zdeněk", "Jakub", "Stanislav", "Roman", "Ondřej",
    "Jaromír", "Marek", "Milan", "Vladimír", "Ladislav", "Ivan", "Filip", "Adam", "Radek", "Matěj",
    "Vojtěch", "Daniel", "Kamil", "Luboš", "Patrik", "Vít", "Rudolf", "Dominik", "Luděk", "Aleš",
    "Stepan", "Richard", "Igor", "Marian", "Janek", "Robert", "Erik", "Norbert", "Emil", "Dennis"
  ];

  return maleNames[getRandomInt(0,maleNames.length-1)];
}

function getMaleSurname(){
  const maleSurnames = [
    "Novák", "Svoboda", "Novotný", "Dvořák", "Černý", "Procházka", "Kučera", "Veselý", "Horák", "Němec",
    "Marek", "Pospíšil", "Pokorný", "Hájek", "Jelínek", "Král", "Růžička", "Beneš", "Fiala", "Sedláček",
    "Doležal", "Zeman", "Kolář", "Navrátil", "Čermák", "Vaněk", "Urban", "Blaha", "Kříž", "Kopecký",
    "Konečný", "Malý", "Holub", "Abrahám", "Adam", "Barták", "Dostál", "Eliáš", "Filip", "Gregor",
    "Hejna", "Chalupa", "Janda", "Kafka", "Langer", "Mach", "Nový", "Odehnal", "Pánek", "Říha"
  ];

  return maleSurnames[getRandomInt(0,maleSurnames.length-1)];
}

function getWorkload(){
  const workloads = [10, 20, 30, 40];
  return workloads[getRandomInt(0, workloads.length-1)]
}
function main(dtoIn){
    
    let count = dtoIn.count;
    let minAge = dtoIn.age.min;
    let maxAge = dtoIn.age.max;
    let dtoOut = [];

    if(count == 0){
      return [];
    }
    else if(count < 0){
      throw new Error("Zadejte kladné číslo.");
    }
    else if(minAge < 18 || minAge > maxAge ){
      throw new Error("Neplatný věk.");
    }
    else{
      for(let i = 0; i < count; i++){
        let empGender = getGender();
        if(empGender == "female"){
          dtoOut.push({
            gender: empGender,
            birthdate: getBirthday(minAge, maxAge),
            name: getFemaleName(),
            surname: getFemaleSurname(),
            workload: getWorkload()
          })
          //console.log(dtoOut[i]);
        }
        else{
          dtoOut.push({
            gender: empGender,
            birthdate: getBirthday(minAge, maxAge),
            name: getMaleName(),
            surname: getMaleSurname(),
            workload: getWorkload()
          })
          //console.log(dtoOut[i]);
        }
      }
    }
   return dtoOut; 
}

//------------------------------------------------------------------------------------------------
function printArray(array){
  for(let i = 0 ; i < array.length ; i++){
    console.log(array[i]);
  }
}

function tests(){
  console.log("Test 1:");
  const dtoIn = {
      count: 50,
      age: {
        min: 19,
        max: 35
      }
  }

  try {
    let dtoOut = main(dtoIn);
    printArray(dtoOut);
  } catch (error) {
    console.error(error.message);
  }

  //------------------------------------------------------------------------------------------------
  console.log("Test 2:");
  const dtoIn1 = {
    count:0,
    age: {
      min: 19,
      max: 35
    }
  }

  try {
    main(dtoIn1);
  } catch (error) {
    console.error(error.message);
  }

  //------------------------------------------------------------------------------------------------
  console.log("Test 3:");
  const dtoIn3 = {
    count:-99,
    age: {
      min: 17,
      max: 35
    }
  }
  try {
    main(dtoIn3);
  } catch (error) {
    console.error(error.message);
  }
  //------------------------------------------------------------------------------------------------
  console.log("Test 4:");
  const dtoIn4 = {
    count:128,
    age: {
      min: 17,
      max: 35
    }
  }
  try {
    main(dtoIn4);
  } catch (error) {
    console.error(error.message);
  }
   //------------------------------------------------------------------------------------------------
  console.log("Test 5:");
  const dtoIn5 = {
    count:128,
    age: {
      min: 20,
      max: 19
    }
  }
  try {
    main(dtoIn5);
  } catch (error) {
    console.error(error.message);
  }
  //------------------------------------------------------------------------------------------------
  
  console.log("Test 6:");
  const maxCount = 100;
  const dtoIn6 = {
    count:getRandomInt(1,maxCount),
    age: {
      min: 18,
      max: 999
    }
  }
  try {
    let dtoOut6 = main(dtoIn6);
    printArray(dtoOut6);
  } catch (error) {
    console.error(error.message);
  }
  
}

tests();
