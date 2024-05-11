import Link from "next/link";

export interface NavItemProps {
  title: string;
  isSelected?: boolean;
}

export function NavItem({ title, isSelected = false}: NavItemProps) {
  return (
    <div>
      <Link
        href="#"
        className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
      >
        <span className="">{title}</span>
        {isSelected && (
          <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700" />
        )}
      </Link>
    </div>
  );
}
