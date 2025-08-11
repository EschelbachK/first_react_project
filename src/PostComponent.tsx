import type { Post } from "./postTypes";

// Definiert den Typ für die Props, die diese Komponente erwartet
// Hier: ein einzelnes "post"-Objekt vom Typ "Post"
type Props = {
    post: Post;
};

// Sie nimmt als Parameter die Props entgegen und holt sich daraus direkt das "post"-Objekt
export default function PostComponent({ post }: Props) {
    return (
        // Mit article, einen Blogbeitrag abgrenzen
        // Die Klasse "card" sorgt für abgerundete Ecken, Schatten und Abstand
        <article className="card">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Autor: {post.author}</p>
        </article>
    );
}
