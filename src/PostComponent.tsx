// Importiert nur den Typ "Post" aus der Datei postTypes.ts (für die Typisierung)
import type { Post } from "./postTypes";

// Definiert den Typ für die Props, die diese Komponente erwartet
// Hier: ein einzelnes "post"-Objekt vom Typ "Post"
type Props = {
    post: Post;
};

// Definiert die Komponente PostComponent, die einen einzelnen Blogeintrag anzeigt
// Sie nimmt als Parameter die Props entgegen und holt sich daraus direkt das "post"-Objekt
export default function PostComponent({ post }: Props) {
    return (
        // HTML-Artikel-Tag, um semantisch einen einzelnen Beitrag darzustellen
        // Die Klasse "card" sorgt für abgerundete Ecken, Schatten und Abstand
        <article className="card">
            {/* Überschrift mit dem Titel des Blogposts */}
            <h2>{post.title}</h2>

            {/* Paragraph mit dem Inhalt/Text */}
            <p>{post.content}</p>

            {/* Paragraph mit dem Namen des Autors */}
            <p>Autor: {post.author}</p>
        </article>
    );
}
