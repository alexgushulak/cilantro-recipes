import { User } from '../types'
import { Recipe } from './Recipe'

type Props = {
    user: User
}

function UserDisplay({ user }: Props) {
    return <div className="flex gap-x-24 justify-center">
        <div className="rounded-sm flex justify-center items-center drop-shadow-md bg-neutral-700 w-48 h-20">
            <p className="text-xl text-gray-200 font-bold">
                {user.name.toUpperCase()}
            </p>
        </div>
        <Recipe />
    </div>
}

export default UserDisplay
