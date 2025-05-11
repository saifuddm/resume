export type ExperienceType = {
    company: string;
    position: string;
    dateString: string;
    location: string;
    bullets: string[];
    active?: boolean;
};

type Link = {
    url: string;
    label: string;
}

export type ProjectType = {
    name: string;
    description: string;
    dateString: string;
    link: Link[];
    bullets: string[];
    active?: boolean;
};
