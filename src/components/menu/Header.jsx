import { Link } from "react-router"

export const Header = () => {
    return (
        <nav className="container mx-auto px-6 py-4 pb-10">
            <div className="flex items-center justify-between backdrop-opacity-10 border-2  p-2 rounded">
                <div className="text-2xl font-bold gradient-text">
                    Lesya
                </div>


                <div className="hidden md:flex items-center space-x-8">
                    <p>about me</p>
                </div>


            </div>
        </nav>
    )
}