// Definiert einen Typ "Post" für Blogeinträge
export type Post = {
    // Eindeutige ID zur Identifikation des Beitrags
    id: number;

    // Titel des Blogeintrags
    title: string;

    // Inhalt/Text des Blogeintrags
    content: string;

    // Name des Autors oder der Autorin
    author: string;
};
