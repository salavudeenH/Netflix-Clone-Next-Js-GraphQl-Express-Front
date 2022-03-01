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

export const Movies = gql`
mutation createMovie($title:String!,$description: String,$link:String,$director:String,$distributor:String,$duration:String,$age:Int,$video:String,$categorie:[ID],$rating:String,$releaseDate:String){
      createMovie(title:$title,description:$description,link:$link,director:$director,distributor:$distributor,duration:$duration,age:$age,video:$video,categorie:$categorie,rating:$rating,releaseDate:$releaseDate)
        {
          id
        }
    },`