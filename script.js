function mascara_cep() {
    var cep = document.getElementById("cep").value;
    cep = cep.slice(0, 10); 
    console.log(cep);
    document.getElementById("cep").value = cep;

   
    if (cep.length > 5 && cep[5] !== '-') {
        document.getElementById("cep").value = cep.slice(0, 5) + "-" + cep.slice(5);
    }
}

function mascara_cpf() {
    var cpf = document.getElementById("cpf").value;
    cpf = cpf.slice(0, 14); 
    console.log(cpf);
    document.getElementById("cpf").value = cpf;

    if (cpf.length > 3 && cpf[3] !== '.') {
        document.getElementById("cpf").value = cpf.slice(0, 3) + "." + cpf.slice(3);
    }
    if (cpf.length > 7 && cpf[7] !== '.') {
        document.getElementById("cpf").value = cpf.slice(0, 7) + "." + cpf.slice(7);
    }
    if (cpf.length > 11 && cpf[11] !== '-') {
        document.getElementById("cpf").value = cpf.slice(0, 11) + "-" + cpf.slice(11);
    }
}

function mascara_telefone() {
    var tel = document.getElementById("telefone").value;
    tel = tel.slice(0, 15);  
    console.log(tel);
    document.getElementById("telefone").value = tel;

    
    if (tel[0] !== "(" && tel[0] !== undefined) {
        document.getElementById("telefone").value = "(" + tel[0];
    }
    if (tel[3] !== ")" && tel[3] !== undefined) {
        document.getElementById("telefone").value = tel.slice(0, 3) + ")" + tel[3];
    }
    if (tel[9] !== "-" && tel[9] !== undefined) {
        document.getElementById("telefone").value = tel.slice(0, 9) + "-" + tel[9];
    }
}

function mascara_cnpj() {
    var cnpj = document.getElementById("cnpj").value;
    cnpj = cnpj.slice(0, 18);  
    document.getElementById("cnpj").value = cnpj;

   
    if (cnpj.length > 2 && cnpj[2] !== '.') {
        document.getElementById("cnpj").value = cnpj.slice(0, 2) + "." + cnpj.slice(2);
    }
    if (cnpj.length > 6 && cnpj[6] !== '.') {
        document.getElementById("cnpj").value = cnpj.slice(0, 6) + "." + cnpj.slice(6);
    }
    if (cnpj.length > 10 && cnpj[10] !== '/') {
        document.getElementById("cnpj").value = cnpj.slice(0, 10) + "/" + cnpj.slice(10);
    }
    if (cnpj.length > 15 && cnpj[15] !== '-') {
        document.getElementById("cnpj").value = cnpj.slice(0, 15) + "-" + cnpj.slice(15);
    }
}

function mascara_codigo() {
    var codigo = document.getElementById("codigo").value;
    codigo = codigo.slice(0, 20); 
    console.log(codigo);
    document.getElementById("codigo").value = codigo;

    
    if (codigo.length > 2 && codigo[2] !== '_') {
        document.getElementById("codigo").value = codigo.slice(0, 2) + "_" + codigo.slice(2);
    }
    if (codigo.length > 5 && codigo[5] !== '/') {
        document.getElementById("codigo").value = codigo.slice(0, 5) + "//" + codigo.slice(5);
    }
    if (codigo.length > 9 && codigo[9] !== '-') {
        document.getElementById("codigo").value = codigo.slice(0, 9) + "-" + codigo.slice(9);
    }
    if (codigo.length > 13 && codigo[13] !== '.') {
        document.getElementById("codigo").value = codigo.slice(0, 13) + "." + codigo.slice(13);
    }
    if (codigo.length > 15 && codigo[15] !== '9') {
        document.getElementById("codigo").value = codigo.slice(0, 15) + "9" + codigo.slice(15);
    }
    if (codigo.length > 17 && codigo[17] !== '.') {
        document.getElementById("codigo").value = codigo.slice(0, 17) + "." + codigo.slice(17);
    }
}
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    


    
    const name = document.getElementById('name').value;
    const endereco = document.getElementById('endereco').value;
    const cep = document.getElementById('cep').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const cnpj = document.getElementById('cnpj').value;
    const codigo = document.getElementById('codigo').value;


    
    const queryString = `?name=${encodeURIComponent(name)}&endereco=${encodeURIComponent(endereco)}&cep=${encodeURIComponent(cep)}&cpf=${encodeURIComponent(cpf)}&telefone=${encodeURIComponent(telefone)}&cnpj=${encodeURIComponent(cnpj)}&codigo=${encodeURIComponent(codigo)}`;
    window.location.href = `resultado.html${queryString}`;
});
function enviardados()
{
    const name = document.getElementById('name').value;
    const endereco = document.getElementById('endereco').value;
    const cep = document.getElementById('cep').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const cnpj = document.getElementById('cnpj').value;
    const codigo = document.getElementById('codigo').value;
}

function resultado(){
    const name = document.setElementById('name').value;
    const endereco = document.setElementById('endereco').value;
    const cep = document.setElementById('cep').value;
    const cpf = document.setElementById('cpf').value;
    const telefone = document.setElementById('telefone').value;
    const cnpj = document.setElementById('cnpj').value;
    const codigo = document.setElementById('codigo').value;
}