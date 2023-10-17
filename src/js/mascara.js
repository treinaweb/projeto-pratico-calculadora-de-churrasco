function formatarMoeda(inputs) {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].getAttribute("type") == "text") {
            inputs[i].addEventListener("keyup", () => {
                var valor = inputs[i].value;

                valor = valor.replace(/[\D]+/g, "");
                valor = valor.replace(/([0-9]{2})$/g, ",$1");

                inputs[i].value = valor;
            });
        }
    }
}

export { formatarMoeda }
