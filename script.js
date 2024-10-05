//your JS code here. If required.
 let counter=0;

        function increment(){
            const previousValue =counter;
            counter++;
            document.getElementById("counter").innerHTML=counter;
            alert(previousValue);
        }