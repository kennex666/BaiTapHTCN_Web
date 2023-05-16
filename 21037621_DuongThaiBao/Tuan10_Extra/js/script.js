var $ = document;
var frm;
var count = 0;
window.onload = () => {
    let txtSerial = $.getElementById("txtSerial").value;
    $.getElementById("txtDes").value = "Thùng Cherry"
    $.getElementById("txtKg").value = 5;
    calcChiPhi();
    frm = $.getElementById("form");
    frm.onsubmit = (e) => {
        e.preventDefault();

        let txtSerial = $.getElementById("txtSerial").value;
        let txtDes = $.getElementById("txtDes").value;
        let fileImage = $.getElementById("fileImage");
        if (fileImage.files.length == 0)
            fileImage = "";
        else
            fileImage = "../img/" + fileImage.files[0].name;
        let txtKg = $.getElementById("txtKg").value;
        let txtChiPhi = $.getElementById("txtChiPhi");

        if (txtSerial.length > 0 && !txtSerial.match(/^([A-Za-z0-9_]{6,})$/)) {
            
            $.getElementById("errSerial").innerHTML = "<i>Số serial phải là chữ, số, có dấu _ và ít nhất 6 kí tự</i>"
            return;
        } else {
            $.getElementById("errSerial").innerHTML = "<i>Số serial in trên kiện hàng nếu có.</i>"
        }

        if (txtDes.trim() == "") {
            $.getElementById("errDes").innerHTML = "<i>Bắt buộc nhập!</i>"
            return;
        } else {
            $.getElementById("errDes").innerHTML = "<i>*</i>"
        }

        if (txtKg.trim() == "") {
            $.getElementById("errKg").innerHTML = "<i>Bắt buộc nhập!</i>"
            return;
        }else {
            $.getElementById("errDes").innerHTML = "<i>*</i>"
        }

        if (!txtKg.match(/^([0-9\.]+)$/)) {
            $.getElementById("errKg").innerHTML = "<i>Trọng lượng phải là số dương!</i>"
            txtChiPhi.value = '';
            return;
        } else {
            txtKg = parseFloat(txtKg)
            if (txtKg <= 0) {
                $.getElementById("errKg").innerHTML = "<i>Trọng lượng phải lớn hơn 0!</i>"
                txtChiPhi.value = '';
                return;
            }
        }
        $.getElementById("errKg").innerHTML = "<i>*</i>"

        let chiPhi = 0;
        if (txtKg <= 20) {
            chiPhi = txtKg * 35000;
        }else if (txtKg <= 50) {
            chiPhi = txtKg * 30000;
        } else {
            chiPhi = txtKg * 15000;
        }
        txtChiPhi.value = chiPhi;

        let elm = $.createElement('tr');
        elm.innerHTML = '<td>' + ++count + '</td> <td>' + txtSerial + '</td> <td>' + txtDes + '</td> <td>' + fileImage + '</td> <td>' + txtKg + '</td> <td>' + chiPhi + '</td>'
        
        $.getElementById("tblData").appendChild(elm);
        
        $.getElementById("form").reset();

        $.getElementById("modal").click();

    }
}

function calcChiPhi() {
     let txtKg = $.getElementById("txtKg").value;
        let txtChiPhi = $.getElementById("txtChiPhi");
    if (txtKg.trim() == "") {
            $.getElementById("errKg").innerHTML = "<i>Bắt buộc nhập!</i>"
            return;
        }else {
            $.getElementById("errDes").innerHTML = "<i>*</i>"
        }

        if (!txtKg.match(/^([0-9\.]+)$/)) {
            $.getElementById("errKg").innerHTML = "<i>Trọng lượng phải là số dương!</i>"
            txtChiPhi.value = '';
            return;
        } else {
            txtKg = parseFloat(txtKg)
            if (txtKg <= 0) {
                $.getElementById("errKg").innerHTML = "<i>Trọng lượng phải lớn hơn 0!</i>"
                txtChiPhi.value = '';
                return;
            }
        }
        $.getElementById("errKg").innerHTML = "<i>*</i>"

        let chiPhi = 0;
        if (txtKg <= 20) {
            chiPhi = txtKg * 35000;
        }else if (txtKg <= 50) {
            chiPhi = txtKg * 30000;
        } else {
            chiPhi = txtKg * 15000;
        }
        txtChiPhi.value = chiPhi;
}