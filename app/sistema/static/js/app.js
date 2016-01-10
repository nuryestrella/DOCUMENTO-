function suma(){
    s= $("#formulario").serialize();
    $.get("/suma",s,function(data){
        $("#resultado").html(data);

    });
}
function sumar(){
    n = prompt("ingrese la cantidad a sumar ");
    html = " ";
    for (var i = 1; i <=parseInt(n) ; i++){
        html+= '<input class="form-control" name= "suma[]" placeholder="numero '+i+' "/>';
    }
    html += "<input type='button' class='btn btn-default' onclick= 'suma()' value='sumar' >";
    $('#mostrar').html(html);
}
function division(){
    d= $("#formulario").serialize();
    $.post("/div",d,function(data){
        $("#resultado").html(data);

    });
}
function divi(){
    html='';
    html += "<input type='number' class='form-control' name= 'dividendo' placeholder='ingrese dividendo' >";
    html += "<input type='number' class='form-control' name= 'divisor' placeholder='ingrese divisor' >";
    html += "<input type='button' class='btn btn-default' onclick= 'division()' value='dividir' >";
    $('#mostrar').html(html);
}