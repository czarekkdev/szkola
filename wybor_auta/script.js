const paliwo = "Pb98";

switch (paliwo) {
    case "Pb95":
        console.log("Podjedź pod dystrybutor z benzyną.");
        break;
    case "Pb98":
        console.log("Podjedź pod dystrybutor z benzyną.");
        break;
    case "ON":
        console.log("Podjedź pod dystrybutor z olejem napędowym (Diesel).");
        break;
    case "LPG":
        console.log("Podjedź pod stanowisko z gazem.");
        break;
    default:
        console.log("Nieznany typ paliwa!");
        break;
}