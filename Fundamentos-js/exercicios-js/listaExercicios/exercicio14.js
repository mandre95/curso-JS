function mercadinho(frutas) {
switch (frutas) {
    case "Maças":
        console.log("Não vendemos essa fruta aqui");
        break;
    case "Kiwi":
        console.log("Estamos com escassez de kiwis");
        break;
    case "Melancia":
        console.log("Aqui está, são 3 reais o quilo");
        break;
    default:
        console.log("Nao temos essa opçao aqui")
    }
}
mercadinho("Maças")
mercadinho("Kiwi")
mercadinho("Melancia")
mercadinho("Limao")