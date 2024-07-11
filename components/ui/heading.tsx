"use client";

interface ClientHeadingPrpos {
  title: string;
  descripition: string;
}

export const ClientHeading = ({ title, descripition }: ClientHeadingPrpos) => {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold tracking-wider">{title}</h2>
      <p className="text-sm text-muted-foreground">{descripition}</p>
    </div>
  );
};
