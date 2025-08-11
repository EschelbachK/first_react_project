// Importiert nur den Typ "Post" aus der Datei postTypes.ts
// Das "import type" sorgt dafür, dass nur Typinformationen geladen werden (kein JavaScript zur Laufzeit)
import type { Post } from "./postTypes";

// Erstellt und exportiert ein Array "POSTS", das eine Liste von Blogeinträgen enthält
// Der Typ "Post[]" bedeutet: ein Array aus Objekten, die dem Post-Typ entsprechen
export const POSTS: Post[] = [
    // Erster Blogeintrag
    {
        id: 1,
        title: "5 Tipps für mehr Produktivität im Homeoffice",
        content: "Homeoffice kann sowohl befreiend als auch herausfordernd sein. In diesem Artikel teile ich fünf bewährte Strategien, um den Arbeitsalltag effizienter zu gestalten – von klaren Tageszielen bis hin zu Pausen, die wirklich erholsam sind.",
        author: "Anna Müller"
    },
    // Zweiter Blogeintrag
    {
        id: 2,
        title: "Warum Kaffee nicht nur ein Getränk ist",
        content:"Kaffee ist für viele mehr als nur ein Wachmacher. Er ist ein Ritual, ein sozialer Anker und ein Kulturgut. Ich erzähle von meinen Reisen zu Kaffeefarmen in Kolumbien und wie mich das Getränk in neue Freundschaften geführt hat.",
        author: "Markus Schmidt"
    },
    // Dritter Blogeintrag
    {
        id: 3,
        title: "Minimalismus: Weniger besitzen, mehr leben",
        content:"Minimalismus ist nicht nur ein Einrichtungstrend, sondern eine Lebensweise. Ich habe meinen Kleiderschrank radikal reduziert und festgestellt, dass weniger Besitz mir mehr Zeit und Freiheit schenkt.",
        author: "Sophie Wagner"
    },
    // Vierter Blogeintrag
    {
        id: 4,
        title: "Die besten Bücher, die ich 2024 gelesen habe",
        content:"Von packenden Thrillern bis zu inspirierenden Biografien – hier sind meine persönlichen Buch-Highlights aus dem Jahr 2024. Vielleicht findest du darin auch deine nächste Lieblingslektüre.",
        author: "Leon Becker"
    }
];
