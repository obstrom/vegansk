import { createServer } from "miragejs";

export default createServer({
    routes() {
        this.namespace = "api";

        this.get("/products", () => [
            {
                id: 1,
                name: "Bregott normalsaltat",
                producer: "Arla",
                searchTags: ["bregott", "normalsaltat", "smör", "arla"],
                ingredients: [
                    "smör",
                    { special: 1 },
                    "vatten",
                    "förtjockningsmedel",
                ],
                vegan: false,
            },
            {
                id: 2,
                name: "Flora 100% Växtbaserad",
                producer: "Flora",
                searchTags: ["flora", "original", "smör"],
                vegan: true,
            },
            {
                id: 3,
                name: "Lätta original",
                producer: "Lätta",
                searchTags: ["lätta", "original", "smör"],
                vegan: false,
            },
            {
                id: 4,
                name: "Becel lätt",
                producer: "Becel",
                searchTags: ["becel", "lätt", "smör"],
                vegan: false,
            },
            {
                id: 5,
                name: "Vegan bredbart",
                producer: "Naturli",
                searchTags: ["vegan", "bredbart", "smör", "naturli"],
                vegan: true,
            },
            {
                id: 6,
                name: "Ekologiskt vegogott",
                producer: "Garant",
                searchTags: ["ekologiskt", "vegogott", "smör", "garant"],
                vegan: true,
            },
        ]);

        this.get("/special-ingredients", () => [
            {
                id: 1,
                name: "E27",
                text: "huoiapdwdawdojih nkdla wd",
            },
        ]);
    },
});
