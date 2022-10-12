const displey = document.querySelector("#displey");
const buttons = document.querySelectorAll(".btn-operador");


buttons.forEach((item) => {
    item.onclick = ()=>{
        if(item.id=="clear"){
            displey.innerHTML= " "
        }else if (item.id=="backspace"){
            let string = displey.innerHTML.toString()
            displey.innerHTML =  displey.innerHTML.substring(0,string.length - 1 )

        }else if(displey.innerHTML !=="" &&  item.id =="equal"){
            displey.innerHTML = eval(displey.innerHTML )
        }else if(displey.innerHTML !==""   ){
              setTimeout(()=>{
                displey.innerHTML += item.id
              },300)
        }
    }
});