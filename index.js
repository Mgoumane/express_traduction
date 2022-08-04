const express = require('express');
const {engine} = require('express-handlebars');

const app = express();
app.engine('handlebars', engine({extname:'.handlebars', defaultLayout : "main"}));
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.listen(8000,(req, res)=> {
    console.log('Serveur lancé')
})

const translations = {
    fr: {
      message: "Bonjour, Ca va ? ",
      flag: "/img/fra.svg",
    },
    en: {
      message: "Hello, How are you ?",
      flag: "/img/gbr.svg",
    },
    es: {
      message: "Hola, como esta ?",
      flag: "/img/esp.svg",
    },
    ge: {
      message: "Guten tag, wie bist du ?",
      flag: "/img/deu.svg",
    },
  };
  

// ROUTES 

app.get('/traduction/:lang', (req, res) => {
    res.render("home",{
        lang: translations[req.params.lang ? req.params.lang : "fr"]
    });
})