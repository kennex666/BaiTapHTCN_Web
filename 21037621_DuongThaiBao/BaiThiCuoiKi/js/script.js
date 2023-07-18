

var count = 0;
var $ = document;
var form;

window.onload = () =>{
    form = $.getElementById("form");

    form.onsubmit = (e) => {
        e.preventDefault();

        let txtNoiTru = $.getElementById("chkNoiTru").checked ? "Nội trú" : "Ngoại trú";
        let txtMaThe =  $.getElementById("txtMaThe").value;
        let txtHoTen =  $.getElementById("txtHoTen").value;
        let txtTuoi =  $.getElementById("txtTuoi").value;
        let txtSDT =  $.getElementById("txtSDT").value;
        let txtDiaChi =  $.getElementById("txtDiaChi").value;
        
        let objString = [];
        if ($.getElementById("chkYC").checked){
            objString.push("Bác sĩ theo yêu cầu");
        }
        
        if ($.getElementById("chkCC").checked){
            objString.push("Phòng dịch vụ cao cấp");
        }
        if ($.getElementById("chkTN").checked){
            objString.push("Trả kết quả tại nhà");
        }

        let txtDV = (objString[0]) ? objString[0] : "Không";
        for (let i = 1; i < objString.length; i++)
            txtDV += ", " + objString[1];

        let sltDoiTuong =  $.getElementById("sltDoiTuong").value;

        let txtTiLeTT =  $.getElementById("txtTiLeTT");

        // Kiểm tra điều kiện bắt buộc

        if (txtMaThe.trim() == ""){
            $.getElementById("errMaThe").innerHTML = "<i>Trường này bắt buộc nhập!</i>"
            $.getElementById("txtMaThe").focus();
            return;
        }else{
            if (!txtMaThe.match(/^(QN|CB|CD)(\-)([0-9]{4})$/)){
                $.getElementById("errMaThe").innerHTML = "<i>Mã thẻ bảo hiểm có định dạng như sau: QN-XXXX hoặc CB-XXXX hoặc CD-XXXX, trong đó X là ký tự số! VD: QN-1912</i>"
                $.getElementById("txtMaThe").focus();
                return;
            }
            $.getElementById("errMaThe").innerHTML = "<i>(*)</i>";
        }

        if (txtHoTen.trim() == ""){
            $.getElementById("errHoTen").innerHTML = "<i>Trường này bắt buộc nhập!</i>"
            $.getElementById("txtHoTen").focus();
            return;
        }else{
            if (!txtHoTen.match(/^([A-Z][a-z]*)(( )([A-Z][a-z]*))+$/)){
                $.getElementById("errHoTen").innerHTML = "<i>Họ tên phải đảm bảo ít nhất có Họ, Tên. Ký tự đầu tiên phải viết hoa. VD: Duong Bao</i>"
                $.getElementById("txtHoTen").focus();
                return;
            }
            $.getElementById("errHoTen").innerHTML = "<i>(*)</i>";
        }

        if (txtTuoi.trim() == ""){
            $.getElementById("errTuoi").innerHTML = "<i>Trường này bắt buộc nhập!</i>"
            $.getElementById("txtTuoi").focus();
            return;
        }else{
            txtTuoi = parseInt(txtTuoi);
            if (!(txtTuoi > 16)){
                $.getElementById("errTuoi").innerHTML = "<i>Tuổi phải trên 16.</i>"
                $.getElementById("txtTuoi").focus();
                return;
            }

            $.getElementById("errTuoi").innerHTML = "<i>(*)</i>";
        }

        if (txtSDT.trim() == ""){
            $.getElementById("errSDT").innerHTML = "<i>Trường này bắt buộc nhập!</i>"
            $.getElementById("txtSDT").focus();
            return;
        }else{
            if (!txtSDT.match(/^(09|03|08|07)([0-9]{8})$/)){
                $.getElementById("errSDT").innerHTML = "<i>Số điện thoại có định dạng là 10 con số trong đó luôn bắt đầu 09,03,08 hoặc 07. VD: 0912345678</i>"
                $.getElementById("txtSDT").focus();
                return;
            }
            $.getElementById("errSDT").innerHTML = "<i>(*)</i>";
        }

        if (txtDiaChi.trim() == ""){
            $.getElementById("errDiaChi").innerHTML = "<i>Trường này bắt buộc nhập!</i>"
            $.getElementById("txtDiaChi").focus();
            return;
        }else{
            $.getElementById("errDiaChi").innerHTML = "<i>(*)</i>";
        }

        if (sltDoiTuong == "1")
            txtTiLeTT = "40%"
            
        if (sltDoiTuong == "2")
            txtTiLeTT = "50%"

        if (sltDoiTuong == "3")
            txtTiLeTT = "30%"

        
        
        let data = $.createElement('tr');

        data.innerHTML = "<td>"+ ++count +"</td> <td>"+txtNoiTru+"</td> <td>"+txtMaThe+"</td> <td>"+txtHoTen+"</td> <td>"+txtTuoi+"</td> <td>"+txtSDT+"</td> <td>"+txtDiaChi+"</td> <td>"+txtDV+"</td> <td>"+txtTiLeTT+"</td>";

        $.getElementById("tblData").appendChild(data);

        $.getElementById("modal").click();
        form.reset();

        $.getElementById("numberData").innerHTML = count < 10 ? "0" + count : count;

        
    }

    $.getElementById("sltDoiTuong").onchange = () => {
        if ($.getElementById("sltDoiTuong").value == "1")
            txtTiLeTT.value = "40%"
            
        if ($.getElementById("sltDoiTuong").value == "2")
            txtTiLeTT.value = "50%"

        if ($.getElementById("sltDoiTuong").value == "3")
            txtTiLeTT.value = "30%"
    }
}