

function createFirstName(){
    var name =" Andrew";
    return name;
}


function saveName(firstNameFucn, lastname, middlename) {

    var combinedName;
    if (typeof firstNameFucn === "function")
    {
        combinedName = firstNameFucn() + " " + middlename + " " + lastname;

    }

    document.getElementById("output").innerHTML = combinedName;
}

saveName(createFirstName, "Amelia", " Smith");


