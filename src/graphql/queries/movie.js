import gql from "graphql-tag";

export const getMovie = gql `
    query {
        getMovie{
        id,
        title,
        description,link,categorie{title}}
    }
`

export const getFilterMovie = gql `
query filterCategory($categorie:String){
    filterCategory(categorie:$categorie){
               title,
                link,
                id
    }
         }`

export const getMovieId = gql`
    query getMovieId ($id:ID){
        getMovieId (id:$id){
        id,
        title,
        link,video,rating,
        director,
        distributor,
        description,
        duration,
        releaseDate,
        age,
        categorie{title}
        }
    }
`