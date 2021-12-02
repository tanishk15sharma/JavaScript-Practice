const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const names =   document.querySelector("#bands");

console.log(bands);

function strip (nameBand) {
   return  nameBand.replace(/^(a |an |the)/i,"" ).trim();
}


const sortBands = bands.sort(function (a,b){
    if( strip(a) >  strip(b)  ) {
        return 1
    }else{
        return -1
    }

} )

names.innerHTML = sortBands.map(item   => `<li>${item}</li>` ).join("")



 console.log(sortBands);





