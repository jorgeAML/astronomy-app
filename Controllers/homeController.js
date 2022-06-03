exports.respondWithContact = (req, res) => {
    res.render("contacto", {title:"Contacto"});
    console.log("Alguien ha llegado a contactos");
};