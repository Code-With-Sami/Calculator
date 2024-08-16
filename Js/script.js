let str = "";
let btns = document.querySelectorAll('.btn');
Array.from(btns).forEach((buton)=>{
    buton.addEventListener('click', (e)=>{
        if(e.target.innerHTML === "="){
            str = eval(str);
            document.querySelector('.input').value = str;
        }
        else if(e.target.innerHTML === "clr" || e.target.innerHTML === "DEL"){
            str = '';
            document.querySelector('.input').value = str;
        }
        else{
            str += e.target.innerHTML;
            document.querySelector('.input').value = str;
        }
    })
});