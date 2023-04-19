var btnSubmit;
var countBN = 0;

window.onload = () => {
    form = document.getElementById("myForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    })

    btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.addEventListener("click", () => {
        let errorMessage = document.getElementById("errorMessage");
        let txtMa = document.getElementById("txtMa");
        txtMa = txtMa.value;
        let txtPass = document.getElementById("txtPass");
        txtPass = txtPass.value;
        let inputDate = document.getElementById("inputDate");
        inputDate = inputDate.value;
        let checkDate = new Date(inputDate);
        let numberChk = 0;
        let chk = document.getElementsByClassName('checkBox-service');
        if (chk[0].checked)
            numberChk++;
        if (chk[1].checked)
            numberChk++;
        if (chk[2].checked)
            numberChk++;
        let cboCK = document.getElementById("cboCK");
        cboCK = cboCK.value;
        let regMa = /^(BN-)(\d{5})$/;
        if (!regMa.exec(txtMa)) {
            errorMessage.classList = "alert alert-danger";
            errorMessage.innerHTML = "Mã bệnh nhân phải đúng định dạng BN-YYYYY, trong đó YYYYY là 5 chữ số";
            return;
        }
        let regPass = /^(.{6,})/;
        if (!regPass.exec(txtPass)) {
            errorMessage.classList = "alert alert-danger";
            errorMessage.innerHTML = "Mật khẩu phải từ 6 kí tự trở lên!";
            return;
        }
        errorMessage.classList = "alert alert-danger d-none";

        dateNow = new Date()
        if (dateNow > checkDate){
            errorMessage.classList = "alert alert-danger";
            errorMessage.innerHTML = "Ngày khám phải sau ngày hiện tại!";
            return;
        }
        let getTable = document.getElementById("tablebody");
        let importData = document.createElement("tr");
        countBN++;
        let stt = document.createElement("td");
        stt.innerHTML = countBN;
        importData.appendChild(stt);

        
        let ma = document.createElement("td");
        ma.innerHTML = txtMa;
        importData.appendChild(ma);
        let mk = document.createElement("td");
        mk.innerHTML = txtPass;
        importData.appendChild(mk);
        let ngayKham = document.createElement("td");
        ngayKham.innerHTML = inputDate;
        importData.appendChild(ngayKham);
        let pt = document.createElement("td");
        pt.innerHTML = numberChk * 500000;
        importData.appendChild(pt);
        let ck = document.createElement("td");
        ck.innerHTML = cboCK;
        importData.appendChild(ck);

        getTable.appendChild(importData);
        btnClose = document.getElementById("btnClose");
        btnClose.click();

        let modal = document.getElementById("myForm")
        modal.reset();

    })
}