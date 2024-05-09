import { useState, useEffect } from 'react'

export function UserHome() {

    type User = {
        name: string,
    }

    const [user, setUser] = useState<User>({name: ""})

    useEffect(() => {
        const userOne: User = { name: 'Alex' }
        setUser(userOne)
    }, [])

    return (
        <div>
            <h1 className='font-bold'>{user.name}'s Cilantro Recipes</h1>
        </div>
    )
}