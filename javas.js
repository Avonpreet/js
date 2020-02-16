function newStudent() {
let ul = document.getElementById("studentlist");
let li = document.createElement("li");
let p = document.createElement("p");
let addingnewStu = document.getElementById("addingnewStu").value;
let item = document.createTextNode(addingnewStu);
let removeStudent = document.createElement("button");
let markcheck = document.createElement("input");
p.setAttribute("id", "newstudentname");
p.innerHTML = addingnewStu;
markcheck.setAttribute("type", "checkbox");
markcheck.setAttribute("id", "mycustomchk");
removeStudent.setAttribute("onclick", "deleteStu()");
removeStudent.setAttribute("class", "removebutton");
removeStudent.innerHTML = "Delete";
li.appendChild(markcheck);
li.appendChild(p);
li.appendChild(removeStudent);
document.getElementById("studentlist").appendChild(li);
document.getElementById("addingnewStu").value = "";
}

function deleteStu() {
let taskdel = document.getElementsByClassName("removebutton");
for (i = 0; i < (taskdel.length); i++) {
taskdel[i].onclick = function() {
let div = this.parentElement;
div.style.display = "none";
}
}
}
