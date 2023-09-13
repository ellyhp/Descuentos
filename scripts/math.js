function Descuento() {
    const btn = document.getElementById('btn');
    const text = document.getElementById('text');

    btn.addEventListener('click', () => {
        //  P * (100 - d) / 100;
        const precio = document.getElementById('precio').value;
        const descuento = document.getElementById('descuento').value;

        if (descuento == 100) {
            text.innerText = 'El producto es gratis!';
        } else if (descuento > 100) {
            text.innerText = '🚨 No se pueden hacer descuentos mayores al precio inicial';
        } else {
            const descuentoTotal = (precio * (100 - descuento)) / 100;
            text.innerText = `El total con el descuento aplicado es: ${descuentoTotal}`;
        }
    });
}

Descuento();