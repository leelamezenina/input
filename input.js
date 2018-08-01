document.getElementById('but').addEventListener ("click", function(){
    var fname = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var female = document.getElementById('female').value;
    var male = document.getElementById('male').value;
    var gender = document.getElementById('gender').value;
   document.getElementById("result").innerHTML = fname + ' ' + surname + ' ' +  gender;
   });