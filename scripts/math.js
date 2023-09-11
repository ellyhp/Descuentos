Descuento()

function Descuento(){


    const btn = document.getElementById('btn');
    const text = document.getElementById('text');

    btn.addEventListener('click', () => {
        //  P * (100 - d) / 100;
        const precio = document.getElementById('precio').value;
        const descuento = document.getElementById('descuento').value;

        const descuentoTotal = (precio * ( 100 - descuento)) / 100;

        text.innerText = "";
        if(descuento > 100){
            text.innerText = '🚨 No se pueden hacer descuentos mayores al precio inicial';
        }else{
            text.innerText = descuentoTotal;
        }




    }   
        );

}



