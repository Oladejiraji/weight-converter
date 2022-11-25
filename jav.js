document.getElementById('output').style.visibility = 'hidden';
document.getElementById('input').addEventListener('input', formInput);


function formInput(e) {
    var select = document.getElementById('select').value;
    document.getElementById('output').style.visibility = 'visible';
    
    if (select === 'Pounds') {
        document.getElementById('pounds').style.display = 'none';
        document.getElementById('grams').style.display = 'block';
        document.getElementById('kg').style.display = 'block';
        document.getElementById('ounce').style.display = 'block';
        let lbs = e.target.value;
        document.getElementById('gramsOutput').innerHTML = lbs / 0.0022046;
        document.getElementById('kgOutput').innerHTML = lbs / 2.2046;
        document.getElementById('ozOutput').innerHTML = lbs * 16;
    }
    
    else if(select === 'Grams'){
        document.getElementById('pounds').style.display = 'block';
        document.getElementById('grams').style.display = 'none';
        document.getElementById('kg').style.display = 'block';
        document.getElementById('ounce').style.display = 'block';
        let grams = e.target.value;
        document.getElementById('poundsOutput').innerHTML = grams * 0.0022046;
        document.getElementById('kgOutput').innerHTML = grams / 1000;
        document.getElementById('ozOutput').innerHTML = grams * 16 * 0.0022046;
    }
    
    else if(select === 'Kilograms'){
        document.getElementById('pounds').style.display = 'block';
        document.getElementById('grams').style.display = 'block';
        document.getElementById('kg').style.display = 'none';
        document.getElementById('ounce').style.display = 'block';
        let kgrams = e.target.value;
        document.getElementById('poundsOutput').innerHTML = kgrams * 2.2046;
        document.getElementById('gramsOutput').innerHTML = kgrams * 1000;
        document.getElementById('ozOutput').innerHTML = kgrams * 16 * 2.2046;
    }
    
    else if(select === 'Ounces'){
        document.getElementById('pounds').style.display = 'block';
        document.getElementById('grams').style.display = 'block';
        document.getElementById('kg').style.display = 'block';
        document.getElementById('ounce').style.display = 'none';
        let ounce = e.target.value;
        document.getElementById('poundsOutput').innerHTML = ounce / 16;
        document.getElementById('gramsOutput').innerHTML = ounce / 16 / 0.0022046;
        document.getElementById('kgOutput').innerHTML = ounce / 16 / 2.2046;
    }
}