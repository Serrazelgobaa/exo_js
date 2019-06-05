const reorganiser = (mot) => {

	nouveauMot = mot[0].toUpperCase();

	i = 1;

	while (i < mot.length)
	{
		nouveauMot = nouveauMot + mot[i].toLowerCase();
		
		i++;
	}
	return nouveauMot;
}

var mot1 = "siMplon";
var mot2 = "sImplOn";
var mot3 = "SIMPLON";

console.log(reorganiser(mot1) + reorganiser(mot2) + reorganiser(mot3));