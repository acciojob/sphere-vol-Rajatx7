function volume_sphere() {
    //Write your code here
	let input = document.getElementById("radius");
	let volumeInput = document.getElementById("volume");
	let num = parseFloat(input.value);
	let volume = (4 / 3) * Math.PI * Math.pow(num, 3);
	
	volumeInput.value = volume.toFixed(2); 
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
