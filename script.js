function volume_sphere() {
    //Write your code here
	     let input = document.getElementById("radius");

            // Get the input element with the id "volume"
            let volumeInput = document.getElementById("volume");

            // Parse the value from the input as a number
            let radius = parseFloat(input.value);
	    if (isNaN(radius)) {
                alert("Please enter a valid number for the radius.");
                return false;
            }
	  // Calculate the volume of the sphere using the formula: V = (4/3) * π * r^3
            let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

            // Display the calculated volume in the "Volume" input box
            volumeInput.value = volume.toFixed(2); // Set the value and round to 2 decimal places

            // Prevent the form from submitting
            return false; 	
  
} 
	// let btn = document.getElementById("submit");
	// btn.addEventListener("click",volume_sphere)

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
