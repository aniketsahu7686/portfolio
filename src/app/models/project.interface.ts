export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    links: {
        demo?: string;
        github?: string;
    };
}
