const button = document.querySelector(".btn")

const calculate = () => {
    const price = parseFloat(document.querySelector(".price").value);
    const people = parseFloat(document.querySelector(".people").value);
    const service = document.querySelector(".service");
    const result = document.querySelector(".result");

    let percent = 0;

    switch (service.value) {
        case "1":
            percent = 15;
            break;
        case "2":
            percent = 10;
            break;
        case "3":
            percent = 5;
            break;
        case "null":
            percent = 0;
            break;
    }


    if (price == 0 || people == 0 || percent == 0) {
        result.innerHTML = `Fill all the necesery data!`;
    } else {

        let part_1 = (price * percent) / 100;
        let part_2 = parseFloat(price + part_1);
        let full = parseFloat(part_2 / people);

        result.innerHTML = `Everybody have to pay - ${Math.round(full*100)/100} $`;
    }

}

button.addEventListener("click", calculate)