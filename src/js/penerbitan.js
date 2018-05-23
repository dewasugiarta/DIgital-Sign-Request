//push data to modal update
function getDetailUser(id){
    console.log(id);
    $.get('./process/user/read-penerbitan.php',{
        id : id
    }, function(data){
        data = JSON.parse(data)
        data = data[0]
        console.log(data);
        $('input[name=updateNama]').val(data.nama).prop('readonly', true);
        $('input[name=updateNIP]').val(data.nip).prop('readonly', true);
        $('input[name=updateNIK').val(data.nik).prop('readonly', true);
        $('input[name=updateInstansi').val(data.instansi).prop('readonly', true);
        $('input[name=updatePangkat]').val(data.pangkat_golongan).prop('readonly', true);
        $('input[name=updateJabatan]').val(data.jabatan).prop('readonly', true);
        $('input[name=updateKota]').val(data.kota).prop('readonly',true);
        $('input[name=updateProvinsi]').val(data.provinsi).prop('readonly',true);
        $('select[name=updateOPD').val(data.id_opd).prop('disabled', true);
        $('input[name=updateEmail]').val(data.email).prop('readonly',true);
        $('input[name=updateSistem]').val(data.sistem).prop('readonly',true);
        $('input[name=updateKegunaan]').val(data.kegunaan).prop('readonly',true);
        $("#previewKTP").attr("href", data.ktp)
        $("#previewSurat").attr("data-id", data.id).attr("data-nip", data.nip).attr("data-get","surat");
        $("#previewKTP").attr("data-id", data.id).attr("data-nip", data.nip).attr("data-get","ktp");
        $('#updateKTP').hide();
        $('#updateSurat').hide();
        $('#updateToggle').prop('checked', false);
        $('#btnUpdate').hide()
        $('#update-penerbitan').modal('show')
    })
}


//edit check box handle
function onUpdate(checkboxElem) {
    if (checkboxElem.checked) {
        $('#updateNama').prop('readonly', false);
        $('#updateNIP').prop('readonly', false);
        $('#updateNIK').prop('readonly', false);
        $('#updateJabatan').prop('readonly', false);
        $('#updatePangkat').prop('readonly', false);
        $('#updateInstansi').prop('readonly', false);
        $('#updateKota').prop('readonly', false);
        $('#updateProvinsi').prop('readonly', false);
        $('#updateOPD').prop("disabled", false);
        $('#updateEmail').prop('readonly', false);
        $('#updateSistem').prop('readonly', false);
        $('#updateKegunaan').prop('readonly', false);
        $('#updateKTP').show();
        $('#updateSurat').show();
        $('#btnUpdate').show();
    } else {
        $('#updateNama').prop('readonly', true);
        $('#updateNIP').prop('readonly', true);
        $('#updateNIK').prop('readonly', true);
        $('#updateJabatan').prop('readonly', true);
        $('#updatePangkat').prop('readonly', true);
        $('#updateInstansi').prop('readonly', true);
        $('#updateKota').prop('readonly', true);
        $('#updateProvinsi').prop('readonly', true);
        $('#updateOPD').prop("disabled", true);
        $('#updateEmail').prop('readonly', true);
        $('#updateSistem').prop('readonly', true);
        $('#updateKegunaan').prop('readonly', true);
        $('#updateKTP').hide();
        $('#updateSurat').hide();
        $('#btnUpdate').hide();
    }
}

function berkasView(id,nip,get){
    window.open("pages/content/userBerkasView.php?id="+id+"&nip="+nip+"&get="+get)
}
