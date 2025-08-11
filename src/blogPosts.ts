// Importiert den Typ "BlogPost" für die Typisierung des Arrays
import type { BlogPost } from "./BlogPostTypes";

// Erstellt ein Array von Blogposts und exportiert es
// Jeder Eintrag im Array entspricht einem BlogPost-Objekt
export const blogPosts: BlogPost[] = [
    {
        id: 1, // Eindeutige ID des Blogposts
        title: "Minimalismus: Weniger besitzen, mehr leben", // Titel des Beitrags
        subtitle: "Weniger ist mehr", // Untertitel
        content: "Minimalismus ist nicht nur ein Einrichtungstrend, sondern eine Lebensweise. Ich habe meinen Kleiderschrank radikal reduziert und festgestellt, dass weniger Besitz mir mehr Zeit und Freiheit schenkt.", // Haupttext
        author: "Sophie Wagner", // Autor des Beitrags
        image: "https://via.placeholder.com/700x300?text=Minimalismus", // Bild-URL
        date: "2025-08-01", // Veröffentlichungsdatum (als String)
        tags: ["Lifestyle", "Minimalismus"], // Tags / Schlagwörter als Array von Strings
        likes: 23, // Anzahl der Likes
    },
    {
        id: 2,
        title: "Kaffee – Mehr als ein Getränk",
        subtitle: "Rituale und Kultur",
        content: "Kaffee verbindet Menschen und ist ein wichtiger Teil vieler Kulturen. Ich erzähle von meinen Reisen zu Kaffeefarmen und der Bedeutung von Kaffee im Alltag.",
        author: "Markus Schmidt",
        image: "https://via.placeholder.com/700x300?text=Kaffee",
        date: "2025-07-28",
        tags: ["Kaffee", "Reisen"],
        likes: 45,
    },
    {
        id: 3,
        title: "5 Tipps für mehr Produktivität im Homeoffice",
        subtitle: "Effizient arbeiten von zu Hause",
        content: "Homeoffice kann sowohl befreiend als auch herausfordernd sein. Hier teile ich fünf bewährte Strategien, um den Arbeitsalltag effizienter zu gestalten.",
        author: "Anna Müller",
        image: "https://via.placeholder.com/700x300?text=Homeoffice",
        date: "2025-08-10",
        tags: ["Produktivität", "Homeoffice"],
        likes: 30,
    }
];
