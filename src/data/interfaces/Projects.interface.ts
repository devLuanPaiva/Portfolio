import { Image } from "./";

export interface Projects {
    id: string;
    title: string;
    description: string;
    responsibility: string;
    tools: string
    results: string
    images: Image[]
}