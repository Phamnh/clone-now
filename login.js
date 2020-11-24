let button = document.getElementsByClassName('btnclick');
let buttons = button[0];

buttons.onclick = function() {
    let inputs = document.getElementsByTagName('input');
    let email = inputs[0];
    let password = inputs[1];
    
    let erremail = document.getElementById("kt-email");
    let errpassword = document.getElementById("kt-password");

    let emailiput = email.value;
    let passwordinput = password.value;

    if(!kiemTraEmail(emailiput)) {
        erremail.innerHTML = "Vui lòng nhập đúng định dạng email";
    }
    else {
        erroremail.innerHTML = "";
    }
    if(!kiemTraMatKhau(passwordinput)) {
        errpassword.innerHTML = "Password có ít nhất 6 ký tự, có ít nhất 1 ký tự đặc biệt, có ít nhất 1 ký tự hoa";
    }
    else {
        errpassword.innerHTML = "";
    }
}

function kiemTraEmail(email) {
    let dem = 0;
    for (let i = 0; i < email.length; i++) {
      if (email[i] == "@") dem++;
    }
    if (dem == 1) {
      return true;
    } else {
      return false;
    }
  }
  
  function kiemTraMatKhau(matKhau) {
    let coKyTuHoa = false;
    for (let i = 0; i < matKhau.length; i++) {
      if (matKhau[i] >= "A" && matKhau[i] <= "Z") {
        coKyTuHoa = true;
        break;
      }
    }
    return (coKyTuHoa == true && matKhau.length >= 6);
  }