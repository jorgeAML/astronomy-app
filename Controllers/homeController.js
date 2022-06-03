exports.respondWithContact = (req, res) => {
    res.render("contacto", {title:"Contacto"});
    console.log('\x1b[35m%s\x1b[0m',"_______________________________________________________");
    console.log('\x1b[35m%s\x1b[0m',"*..:::..* Alguien ha llegado a contactos :) *..:::..*");
    console.log('\x1b[35m%s\x1b[0m',"-------------------------------------------------------");
};
exports.respondWithDonation = (req, res) => {
    res.render("donar", {title: "Pagina de donaciones"});
    console.log('\x1b[35m%s\x1b[0m',"_______________________________________________________");
    console.log('\x1b[35m%s\x1b[0m',"*..:::..* Alguien esta interesado en donar :) *..:::..*");
    console.log('\x1b[35m%s\x1b[0m',"-------------------------------------------------------");
};