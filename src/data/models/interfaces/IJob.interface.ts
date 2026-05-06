export interface IJob {
    id: number
    title: string;
    company: string;
    companyCategory: string;
    duration: string;
    description: string;
    href?: {
        label: string;
        url: string;
    }
}