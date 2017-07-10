function EvaluateCollatzSequence(){
    var input_number = parseInt(document.getElementById('input-text').value);
    var output = document.getElementById('output-para');
    
    if(input_number < 0){
        alert("Please enter a Positive number");
    }
    else{
        var result_array = [];
        var result_string = "";

        result_array.push(input_number);

        while(input_number > 1){
            if(input_number % 2 === 0){
                input_number = input_number / 2;
                result_array.push(input_number);
            }
            else{
                input_number = input_number * 3 + 1;
                result_array.push(input_number);
            }
        }

            result_array.forEach(function(item){
            result_string += item +"," ;
            });

            result_string = result_string.slice(0,result_string.length - 1);
            result_string +=" Stopping time : " + (result_array.length - 1);
        output.innerHTML = result_string;
    }                
}