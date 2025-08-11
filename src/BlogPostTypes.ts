export type BlogPost = {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    author: string;
    image?: string;
    date?: string;
    tags?: string[];
    likes?: number;
};
