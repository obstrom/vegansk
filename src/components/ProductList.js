import { createServer, Model } from "miragejs";

export default createServer({
  models: {
    rating: Model,
  },

  seeds(server) {
    server.create("rating", {
      productId: 1,
      value: 4,
      text: "Supergott!",
      name: "Bengt",
      date: "11 mars 2021"
    });
    server.create("rating", {
      productId: 2,
      value: 3,
      text: "OK",
      name: "Berra",
      date: "12 april 2021"
    });
    server.create("rating", {
      productId: 3,
      value: 1,
      text: "Bläää...",
      name: "Maria",
      date: "18 mars 2021"
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/products", () => [
      {
        id: 1,
        name: "Bregott normalsaltat",
        producer: "Arla",
        searchTags: ["bregott", "normalsaltat", "smör", "arla"],
        ingredients: ["Smör", "rapsolja", "vatten", "salt", "vitamin A och D."],
        about:
          "Bregott® Normalsaltat är en favorit på svenska smörgåsar alltsedan 1969." +
          " Kärnat av svensk grädde blandat med rapsolja och en nypa salt – naturligt gott." +
          " Grädden finns med för den goda smakens skull och rapsoljan gör det lättare att bre på brödet." +
          " Bregott® Normalsaltat gör sig allra bäst på smörgåsen men passar också att steka i och baka med." +
          " Symbolen med den blågula gräddkannan garanterar att produkten är gjord på 100 procent svensk grädde.",
        allergens: "Mjölk",
        vegan: false,
      },
      {
        id: 2,
        name: "Flora 100% Växtbaserad",
        producer: "Flora",
        searchTags: ["flora", "original", "smör"],
        ingredients: [
          "Vegetabilisk olja (raps 60%, palm#)",
          " vatten, salt (1,3%)",
          { specialId: 1 },
          "naturlig arom",
          " vinäger",
          " A- och D2 vitamin.",
        ],
        about:
          "Flora 100% Växtbaserad är ett bredbart alternativ till smör med den goda smaken av Flora. " +
          "Den är helt utan animaliska ingredienser och helt veganskt, vilket passar dig som vill äta mer " +
          "från växtriket utan att kompromissa på den goda smaken.",
        allergens: "",
        vegan: true,
      },
      {
        id: 3,
        name: "Lätta original",
        producer: "Lätta",
        searchTags: ["lätta", "original", "smör"],
        ingredients: [
          "vatten",
          "vegetabiliska oljor (raps (17%), palm (14%), shea (8%))",
          "KÄRNMJÖLK (5%)",
          "modifierad stärkelse",
          "salt (1,5%)",
          { specialId: 1 },
          " syra (mjölksyra)",
          "naturlig arom",
          "vitamin A och D",
        ],
        about:
          "Lätta Original är ett bredbart margarin med låg (39%) fetthalt. " +
          "Ett lättmargarin som är ett alternativ till smör att bre på mackan. " +
          "Lätta är en klassiker på svenska frukostbord sedan 1984.\n" +
          "Har en lätt och fräsch smak och är gjord med rapsolja och kärnmjölk för den goda smakens skull. " +
          "För dig som vill behålla en sund och hälsosam livsstil, men fortsätta njuta av en naturlig god smak på mackan.",
        allergens: "Mjölk",
        vegan: false,
      },
      {
        id: 4,
        name: "Becel lätt",
        producer: "Becel",
        searchTags: ["becel", "lätt", "smör"],
        ingredients: [
          "Vatten",
          "vegetabilisk olja (solros 18%, linfrö 8%, raps 4%, palm#)",
          "" + "modifierad stärkelse",
          "salt 1%",
          { specialId: 2 },
          { specialId: 1 },
          " konserveringsmedel (kaliumsorbat)",
          "syra (citronsyra)",
          "naturlig arom",
          "A- och D2-vitamin.",
        ],
        about:
          "Använd Becel Lätt Omega 3 som ett alternativ till smör på mackan. På grund av den låga fetthalten passar produkten inte att använda till stekning och bakning." +
          " Däremot passar den utmärkt att använda exempelvis i bakad potatis, i pastarätter eller på varma grönsaker.",
        allergens: "",
        vegan: false,
      },
      {
        id: 5,
        name: "Vegan bredbart",
        producer: "Naturli",
        searchTags: ["vegan", "bredbart", "smör", "naturli"],
        ingredients: [
          "rapsolja (39%)",
          "vatten",
          "kokosolja (22%)",
          "sheaolja (13%)",
          "MANDELPASTA (2%)",
          "salt",
          { specialId: 1 },
          " morotsjuice",
          "citronjuice",
          "naturlig arom",
          "vitamin A &D (vegetabilsk).",
        ],

        about:
          'Naturli\'s Bredbart är ett vegansk och ekologisk "smör". Passar perfekt till frukostmackorna ' +
          "eller mellanmålsfikat. Naturli' Bredbartär fritt från gluten och palmolja och innehåller shea, kokosnöt, " +
          'rapsolja och mandlar. Smakar som smör och är lätt att "bre" på mackan!',
        allergens:
          "Kan innehålla spår av: Jordnötter, hasselnötter, cashewnötter och pistaschnötter.",
        vegan: true,
      },
      {
        id: 6,
        name: "Ekologiskt vegogott",
        producer: "Garant",
        searchTags: ["ekologiskt", "vegogott", "smör", "garant"],
        ingredients: [
          "Solrosolja 40%",
          "vatten",
          "kokosolja 22%",
          "sheasmör 13%",
          "salt 0,9%",
          { specialId: 1 },
          "juice (morot, citron)",
          "arom",
          "vitamin A",
          "vitamin D.",
        ],
        about:
          "Ekologiskt Vegogott är ett veganskt och njutbart alternativ till smör. Tillverkat på solrosolja, kokosolja och sheasmör är det bredbart och läckert att äta på mackan!",
        allergens: "",
        vegan: true,
      },
    ]);

    this.get("/special-ingredients", () => [
      {
        id: 1,
        name: "Emulgerinsmedel (solroslecitin)",
        text:
          "Emulgeringsmedel kan användas för att underlätta tillverkningen av vissa livsmedel " +
          "och för att bevara egenskaper under transport och lagring. Emulgeringsmedel påverkar viskositet (tröghet)," +
          " utseende, struktur, känsla – till exempel när man stoppar livsmedlet i munnen.",
      },
      {
        id: 2,
        name: "kaliumklorid",
        text:
          "Kaliumklorid, är ett ämne som kristalliserar i kubiska kristaller. " +
          "Kaliumklorid smakar salt och används vid matlagning i saltblandningar med mindre andel natriumklorid",
      },
    ]);

    this.get("/ratings", (schema) => {
      return schema.ratings.all();
    });

    this.post("/ratings", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      console.log(attrs);
      return schema.ratings.create(attrs);
    });
  },
});
