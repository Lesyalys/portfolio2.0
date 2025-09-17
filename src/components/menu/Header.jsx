import { Link } from "react-router"

export const Header = () => {
    return (
        <nav class="container mx-auto px-6 py-4 pb-10">
            <div class="flex items-center justify-between">
                <div class="text-2xl font-bold gradient-text">
                    Lesya
                </div>


                <div class="hidden md:flex items-center space-x-8">
                    <Link class="text-muted-foreground hover:text-primary transition-colors duration-200 hover:glow-text">
                        <Link to="/about">About me</Link>
                    </Link>
                    <Link class="text-muted-foreground hover:text-primary transition-colors duration-200 hover:glow-text">
                        <Link to="/publication">My publication</Link>
                    </Link>
                    <Link class="text-muted-foreground hover:text-primary transition-colors duration-200 hover:glow-text">
                        <Link to="/skills">My skills</Link>
                    </Link>
                    <Link class="text-muted-foreground hover:text-primary transition-colors duration-200 hover:glow-text">
                        <Link to="/contact">Contact with me</Link>
                    </Link>
                </div>

                <Link data-slot="Link" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9 md:hidden">

                </Link>
            </div></nav>
    )
}