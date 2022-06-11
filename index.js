// Code your solution here
function  findMatching(arrayDrivers,string){
    return arrayDrivers.filter(
        (match) => match.toLowerCase() === string.toLowerCase() );
}

function fuzzyMatch(arrayDrivers,string){
    return arrayDrivers.filter(
        (match) => match.toLowerCase().indexOf(string.toLowerCase()) === 0);
}

function  matchName(arrayDrivers,string){
    return arrayDrivers.filter((data) => data.name === string);
}