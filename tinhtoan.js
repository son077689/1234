function aa(hihi) {
    document.getElementById('Nhap').value += hihi;
}
function caculate() {
    let x=document.getElementById('Nhap').value;
    document.getElementById('Nhap').value=eval(x);
}
function Del() {
    let x = document.getElementById('Nhap').value;
    document.getElementById('Nhap').value = x.substring(0,x.length-1);
}
function CE() {
    document.getElementById('Nhap').value="";

}
function C() {
    let x = document.getElementById('Nhap').value;
    document.getElementById('Nhap').value = x.substring(0, x.length-1);
}