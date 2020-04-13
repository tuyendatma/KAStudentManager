let listStudent=[];
let listAddress=[];
let listPhone=[];
function addNewStudent(newStudent,newAddress,newPhoneNumber) {
    if(newStudent.length>=1 && newAddress.length >=1 && newPhoneNumber>=9){
        listStudent.push(newStudent);
        listAddress.push(newAddress);
        listPhone.push(newPhoneNumber);
        return true;
    }else {
        return false;
    }

}
function creatNewStudent() {
    let newStudent = document.getElementById("newStudent").value;
    let newPhoneNumber= document.getElementById("newPhoneNumbers").value;
    let newAddress = document.getElementById("newAddress").value;


    if(addNewStudent(newStudent,newAddress,newPhoneNumber)){
        document.getElementById("newStudent").value ="";
        document.getElementById("newPhoneNumbers").value="";
        document.getElementById("newAddress").value="";
    }else {
        alert("nhập sai rồi");
        // document.getElementById("newStudent").focus();
    }
     showInfomationStudent()

}
function showInfomationStudent() {
    let data="<table border='2px'>";
    data+="<tr><th>STT</th><th>Họ và tên</th><th>Địa chỉ</th><th>Số điện thoại</th><th>Edit</th><th>Delete</th></tr>"
    for(let i=0;i<listStudent.length;i++){
        data+= "<tr><td>"+(i+1)+"</td><td>"
            +listStudent[i]+"</td><td>"
            +listAddress[i]+"</td><td>"
            +listPhone[i]+"</td><td>"
            +"<button onclick='editInfomationStudent("+i+")'>Edit</button> "+"</td><td>"
            +"<button onclick='deleteStudent("+i+")'>Delete</button>"+"</td></tr>"
    }
    data+="</table>";
    document.getElementById("listStudent").innerHTML = data;

}
function editInfomationStudent(index) {
    let mySelect= parseInt(prompt("Ấn 1 để sửa tên;Ấn 2 để sửa địa chỉ;Ấn 3 để sửa số điện thoại"));
    switch (mySelect) {
        case 1: {
            let newName= prompt("mời nhập tên mới:");
            listStudent[index]=newName;
            showInfomationStudent();
            break;
        }
        case 2: {
            let newAddress= prompt("mời nhập địa chỉ mới:");
            listAddress[index]=newAddress;
            showInfomationStudent();
            break;
        }
        case 3: {
            let newPhoneNumbers= parseInt(prompt("mời nhập số điện thoại mới:"));
            listPhone[index]=newPhoneNumbers;
            showInfomationStudent();
            break;
        }
        default: {alert("bạn đã nhập sai")}
    }

}
function deleteStudent(index) {
    let deleteInfomation = confirm('Bạn chắc chắn muốn xóa?');
    if(deleteInfomation){
        listStudent.splice(index,1);
        // listAddress.splice(index,1);
        // listPhone.splice(index,1);
        showInfomationStudent()
    }

}