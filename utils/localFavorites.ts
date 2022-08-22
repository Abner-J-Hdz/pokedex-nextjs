const toggleFavorite = (id: number ) => {
    //console.log('toggleFavorite Llamado')

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

    if(favorites.includes(id)){
        favorites = favorites.filter(pokeId => pokeId !== id);
    }else{
        favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
}


const existInFavorites = (id: number): boolean => {

    if(typeof window === 'undefined') return false;///verificamos si es codigo de servirdor ya que local storage no existe en el backend

    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(id);
}

export default{
    toggleFavorite,
    existInFavorites
}