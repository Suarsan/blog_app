export interface Post {

    author: string;
    creation_date: number;
    read_time: number;
    title: string;
    tags: string[];
    paragraphs: Paragraph[];
    image: string;
}

export interface Paragraph {
    content: string;
    html_tag: string;
    classes: string;
}
