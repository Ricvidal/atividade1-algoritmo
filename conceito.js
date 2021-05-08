function conceito( ) {
	var med=document.getElementById("medFin").value;
		
		if (med>=85&&med<=100){

			document.getElementById("conc").value="   A";
		}
		if (med>=70&&med<85){

			document.getElementById("conc").value="   B";
		}
		if (med>=50&&med<70){

			document.getElementById("conc").value="   C";
		}
		if (med>=30&&med<50){

			document.getElementById("conc").value="   D";
		}
		if (med>=0&&med<30){

			document.getElementById("conc").value="   E";
		}
		if (med>100||med<0){
			document.getElementById("conc").value="  ???";
		}
}