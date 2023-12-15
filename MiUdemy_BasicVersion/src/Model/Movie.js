import class Movie{
    constructor (name, release, img){
        this.name = name
        this.releaseYear = release
        this.img = img
        this.rating = 0
    }


setRating(rating){
    if (this.validateRating(rating)){
        this.rating = rating
    }else{
        alert("Invalid rating!")
    }
}

validateRating(rating){
    if (rating <= 5 && rating >=0){
        return true
    }
    return false
    }
}