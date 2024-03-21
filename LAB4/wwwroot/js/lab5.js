
 function buton(){
    
   
        let x = document.getElementById("myDIV")
        if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
    }

    function buton2(){
    
   
        let x = document.getElementById("hidden")
        if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
    }

    
    function calculateSum() {
        let x = document.getElementById("result")
        
            x.style.display = "block";
          
        let input1 = parseFloat(document.getElementById("input1").value);
        let input2 = parseFloat(document.getElementById("input2").value);
      
        if (!isNaN(input1) && !isNaN(input2)) {
          let sum = input1 + input2;
          document.getElementById("result").innerText = "   The sum of " + input1 + " and "+ input2 +" is: "+sum;
          
        } else {
          alert("Please enter valid numbers in both fields.");
        }
        return false;
      }