import React from "react";
import Link from "next/link";

export const Header: React.FC<{
    links: {title: string, url: string}[]
}> = ({ links }) => (
    <div className="flex h-auto py-4 px-4 justify-end items-center">
        <div className="flex items-center gap-4">
            {links.map((link, i) => (
                <Link key={i} href={link.url} className="hover:underline">
                    {link.title}
                </Link>
            ))}
        </div>
    </div>
);