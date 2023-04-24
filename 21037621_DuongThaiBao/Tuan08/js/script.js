var btnSubmit;
var $ = document;
var frm;

var catchTypeEvent;

window.onload = () => {

    form = $.getElementById("myForm");
    form.onsubmit = (event) => {
        event.preventDefault();
    }

    btnSubmit = $.getElementById('btnNhap');

    catchTypeEvent = $.getElementById('txtType');

    catchTypeEvent.onchange = () => {
        let vat = $.getElementById('txtVAT');
        vat.value = $.getElementById('txtType').value;
    }

    btnSubmit.onclick = () => {
        let ma = $.getElementById('txtMa').value;

        if (!ma.match(/^(SP)(\d){4}(NK|XK)$/)) {
            $.getElementById('errMsg').classList = "alert alert-danger mb-4";
            $.getElementById('errMsg').innerHTML = "Mã sản phẩm phải bắt đầu từ SP, theo sau là 4 kí số, kí hiệu NK hoặc XK<br>Ví dụ SP1234NK"
            return;
        }

        let ten = $.getElementById('txtName').value;
        let date = $.getElementById('txtDate').value;
        let loai = $.getElementById('txtType').selectedOptions[0].innerHTML;
        let vat = $.getElementById('txtType').value;
        let isOnline = $.getElementById('radOnline').checked;
        let isNhapKhau = $.getElementById('chkNK').checked ? "Nhập khẩu" : "";
        let isXuatKhau = $.getElementById('chkXK').checked ? "Xuất khẩu" : "";

        let str = (isNhapKhau != "" && isXuatKhau != "") ? isNhapKhau + ", " + isXuatKhau : isNhapKhau + isXuatKhau + " ";

        let data = $.getElementById('tblData');

        let dataRow = $.createElement('tr');

        dataRow.innerHTML = '<td>' + ma + '</td><td>' + ten + ' </td> <td>' + date + '</td> <td>' + loai + '</td> <td>' + str + '</td> <td>' + (isOnline ? 'Online' : 'Offline') + '</td> <td>' + vat + '</td>'

        data.appendChild(dataRow);
        $.getElementById('btnClose').click();

        $.getElementById('myForm').reset() 
        $.getElementById('errMsg').classList = "alert alert-danger mb-4 d-none";
    }
}