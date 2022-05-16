function adicionar (){
    let number = document.getElementById("numero").value;
    let list = document.getElementById("lista").innerHTML;

    list += "<li>" +number+ "<li>"

    document.getElementById("lista").innerHTML = list
}
