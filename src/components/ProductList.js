import { createServer } from "miragejs";

export default createServer({
    routes() {
        this.get("/api/products", () => [
            {
                id: 1,
                name: "Bregott normalsaltat",
                producer: "Arla",
                searchTags: ["bregott", "normalsaltat", "smör", "arla"],
                vegan: false,
            },
            {
                id: 2,
                name: "Flora original",
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
    },
});
