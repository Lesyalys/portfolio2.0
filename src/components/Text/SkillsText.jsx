export const SkillsText = () => {
    return (
        <div className="flex flex-col">
            <span className="flex flex-row gap-5">
                <h2 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
                    My stack:
                </h2>
                <ul className="flex flex-row [&>li]:flex [&>li]:items-center gap-2 ">
                    <li>React</li>
                    <li>Figma / AdobePhotoshop</li>
                    <li>Js / Ts</li>
                    <li>NodeJS</li>
                    <li>Express / Fastify</li>
                </ul>
            </span>
            <span className="flex flex-row gap-5">
                <h2 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
                    Other:
                </h2>
                <ul className="flex flex-row [&>li]:flex  [&>li]:items-center gap-2">
                    <li>Git / GitHub</li>
                    <li></li>
                    <li>NodeJS</li>
                    <li>Express/Fastify</li>
                </ul>
            </span>
        </div>
    )
}