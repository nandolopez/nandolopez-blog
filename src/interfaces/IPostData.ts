export interface IPostData {
    title: string;
    description: string;
    language: string;
    index: boolean;
    publication_date: Date | string;
    update_date: Date | string;
    thumbnail: string;
    meta_title: string;
    meta_description: string;
    topic: string;
    status: string;
    tags: string;
}