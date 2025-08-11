// Importiere den Typ "BlogPost" für die Typisierung der Props
import type { BlogPost } from "./BlogPostTypes";

// Definiere die Komponente "BlogPost" mit Props vom Typ BlogPost
export default function BlogPost({
                                     title,     // Titel des Blogposts
                                     subtitle,  // Untertitel
                                     content,   // Hauptinhalt/Text
                                     author,    // Autorname
                                     image,     // Bild-URL (optional)
                                     date,      // Veröffentlichungsdatum (optional)
                                     tags,      // Liste von Tags (optional)
                                     likes,     // Anzahl der Likes (optional)
                                 }: BlogPost) {
    return (
        // HTML-Element für einen einzelnen Blogartikel mit Styling-Klasse "card"
        <article className="card">

            {/* Wenn ein Bild vorhanden ist, zeige es an */}
            {image && (
                <img
                    src={image}                         // Bildquelle
                    alt={title}                        // Alternativtext für das Bild
                    style={{
                        maxWidth: "100%",               // Bild maximal in der Breite anpassen
                        borderRadius: "8px",            // Abgerundete Ecken beim Bild
                        marginBottom: "1rem"            // Abstand nach unten
                    }}
                />
            )}

            {/* Zeige den Titel des Blogposts an */}
            <h2>{title}</h2>

            {/* Zeige den Untertitel in hellerer Farbe und normaler Schriftstärke */}
            <h4 style={{ color: "#666", fontWeight: "normal" }}>{subtitle}</h4>

            {/* Zeige das Veröffentlichungsdatum, wenn vorhanden */}
            <p>
                <small>
                    {date ? new Date(date).toLocaleDateString() : ""}
                </small>
            </p>

            {/* Zeige den Hauptinhalt des Blogposts */}
            <p>{content}</p>

            {/* Zeige den Autor des Beitrags */}
            <p><strong>Autor:</strong> {author}</p>

            {/* Wenn Tags vorhanden sind, zeige sie als Hashtags an */}
            {tags && (
                <p>
                    Tags:{" "}
                    {tags.map((tag) => (
                        <span
                            key={tag}                       // Schlüssel für React-Liste
                            style={{ marginRight: "0.5rem" }} // Abstand zwischen den Tags
                        >
                            #{tag}
                        </span>
                    ))}
                </p>
            )}

            {/* Wenn Likes vorhanden sind, zeige die Anzahl der Likes */}
            {likes !== undefined && <p>👍 Likes: {likes}</p>}
        </article>
    );
}
