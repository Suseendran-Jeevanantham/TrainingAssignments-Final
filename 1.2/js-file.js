function EvaluateResult(){
    var input_text = document.getElementById('input-text').value;   
    var result_para = document.getElementById('result-para');
    if(!input_text)   {
        alert("Please enter a valid data");
        return;
    }
    for(var i=0;i<input_text.length;i++){
        if(input_text[i] >='A' && input_text[i] <= 'Z'){
            input_text = input_text.replace(input_text[i],'');
            i--;
        }
    }
    result_para.innerHTML = "The Result is : " + input_text;
}