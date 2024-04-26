export interface FilterOption {
    name: string;
    color: string; // This allows customization of colors via props
}

export interface FilterCardProps {
    priorityOptions?: FilterOption[];
    kpiOptions?: string[];
}
