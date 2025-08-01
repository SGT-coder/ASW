
"use client";

import { format, formatDistanceToNow } from 'date-fns';

interface DateDisplayProps {
    dateString: string;
    includeTime?: boolean;
}

export function DateDisplay({ dateString, includeTime = false }: DateDisplayProps) {
    if (!dateString) return null;

    try {
        const date = new Date(dateString);
        const fullFormat = includeTime ? 'MMM d, yyyy, h:mm a' : 'MMM d, yyyy';
        const fullDate = format(date, fullFormat); // Title remains in standard format
        const relativeDate = formatDistanceToNow(date, { addSuffix: true });

        return (
            <span title={fullDate}>
                {relativeDate}
            </span>
        );
    } catch (error) {
        console.error("Invalid date string:", dateString);
        return <span>Invalid Date</span>;
    }
}
