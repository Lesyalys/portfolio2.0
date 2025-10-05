import { Text } from "../Text/Text"

export const Menu = () => {
    return (
        <div className="flex flex-row gap-10 pb-10 items-center">
            <img
                src="https://i.pinimg.com/736x/10/c5/9a/10c59a92c11632fb93e07e2b905c6aaa.jpg"
                // src="https://i.pinimg.com/originals/4a/65/ab/4a65abeead3a8d113bccfee5d5d239f4.gif"
                height="200px"
                width="200px"
                className="rounded-lg border-2 border-blue-400 shadow-lg shadow-blue-500/50 ring-2 ring-blue-300 ring-opacity-50 object-cover"
            />
            <Text />
        </div>
    )
}