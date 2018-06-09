    
    function sdrCalculate(){
        let flatcost=(document.getElementById("fc").value);
        let carpet=(document.getElementById("ca").value);
        let enclosedBalcony=(document.getElementById("eb").value);
        let elevationFeature=(document.getElementById("ef").value);
        let terracePatio=(document.getElementById("tp").value);
        let floor=(document.getElementById("flr").value);
        let output=document.getElementById("output");
        const rrRate=Number(53100);
        

        
	if(carpet===""||enclosedBalcony===""||elevationFeature===""||terracePatio==="")
	{
            console.log(elevationFeature);
            
            output.innerHTML="<h3>Please fill proper details</h2>"
            output.style="display:grid;"
            output.className="alert alert-danger"
        }

        else{

	flatcost=Number(document.getElementById("fc").value);
        carpet=Number(document.getElementById("ca").value);
        enclosedBalcony=Number(document.getElementById("eb").value);
        elevationFeature=Number(document.getElementById("ef").value);
        terracePatio=Number(document.getElementById("tp").value);
        floor=Number(document.getElementById("flr").value);
        
        
           carpet+=elevationFeature;
           carpet+=carpet*10/100;
           carpet+=enclosedBalcony;
           let mv=carpet*rrRate;
           terracePatio*=rrRate*40/100;

           mv+=terracePatio;

           mv+=mv*5/100;

           if(floor<5){
               
           }
           else if(floor>4&&floor<11){
               mv+=mv*5/100;
           }
           else if(floor>10&&floor<16){
               mv+=mv*10/100;
           }
           else{
               mv+=mv*15/100;
           }

           

          let marketvalue=mv+=500-mv%500;
          let outputfc="";
          let calculatedOn;
          if(flatcost>marketvalue){
            
            outputfc=`<h3>Flatcost : <b>${flatcost}</b> is higher than Market Value of ${marketvalue}`
            marketvalue=flatcost;
            calculatedOn="Flatcost"
          
        } else if(flatcost==marketvalue){
            outputfc=`<h3>Market Value : ${marketvalue}  and Flatcost : ${flatcost} both are same`
            
          } else{
            outputfc=`<h3>Market Value : <b>${marketvalue}</b> is higher than Flatcost of ${flatcost} `
            calculatedOn="Market Value"
        }
        

          let stampduty=marketvalue*6/100;
          stampduty+=500-stampduty%500;
           let registration;

           if(marketvalue*1/100>30000){
               registration=30000;
           }
           else{
               registration=marketvalue*1/100;
               registration+=100-registration%100;
           }

           output.innerHTML=outputfc+`
                <h3>SDR Calculated on : ${marketvalue} (${calculatedOn})<h3>
                <h3>Stampduty Amount : ${stampduty}</h3>
                <h3>Registraion Amount: ${registration}</h3>
                         
                `;
            output.style="display:block;"
            output.className="alert alert-info"


           

        

           
        }
        
    }
