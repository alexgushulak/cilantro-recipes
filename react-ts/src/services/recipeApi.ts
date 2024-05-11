export const fetchRecipe = async (recipeId: number) => {
    try {
        const response = await fetch(`htts://api.example.com/recipes/${recipeId}`)
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return await response.json()
    } catch(error) {
        console.error('There was a problem with your fetch operation:', error)
    }
}