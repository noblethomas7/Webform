
$.getJSON('names.json', function(data) {

    var select = document.getElementById("mylist1")
    var select2 = document.getElementById("mylist2")
    for(var i = 0; i < data['mylist1'].length; i++){
       var option = document.createElement("OPTION"),
           txt = document.createTextNode(data['mylist1'][i]['name']);
       option.appendChild(txt);
       select.insertBefore(option,select.lastChild);
       
       var option2 = document.createElement("OPTION"),
           txt2 = document.createTextNode(data['mylist1'][i]['id']);
       option2.appendChild(txt2);
       select2.insertBefore(option2,select2.lastChild);
    

    }
});

$.getJSON('states.json', function(data) {

    var select3 = document.getElementById("mylist3")
    for(var i = 0; i < data['states'].length; i++){
       var option3 = document.createElement("OPTION"),
           txt3 = document.createTextNode(data['states'][i]['name']);
       option3.appendChild(txt3);
       select3.insertBefore(option3,select3.lastChild);
       
    }
});


        
// function show1(){
//     var mylist1 = document.getElementById("mylist1")
//     document.getElementById("STUDENT").value = mylist1.options[mylist1.selectedIndex].text;
//     }
// function show2(){
//     var mylist2 = document.getElementById("mylist2")
//     document.getElementById("ROLL_NO").value = mylist2.options[mylist2.selectedIndex].text;
//     }
// function show3(){
//     var mylist3 = document.getElementById("mylist3")
//     document.getElementById("STATE").value = mylist3.options[mylist3.selectedIndex].text;
//     }

let saveFile = () => {
    	
    // Get the data from each element on the form.
    const name = document.getElementById('mylist1');
    const rollno = document.getElementById('mylist2');
    const state = document.getElementById('mylist3');
            
    // This variable stores all the data.
    let data = 
        '\r NAME OF THE STUDENT: ' + name.value + ' \r\n ' + 
        'ROLL NUMBER: ' +rollno.value + ' \r\n ' + 
        'STATE/UT: ' + state.value + ' \r\n '; 
                        
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }
    newLink.click(); 
}
    