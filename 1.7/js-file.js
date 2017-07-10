
function movie(){
    this.movie_list =[],
    this.AddMovie = function(name,rating){
        this.movie_list.push(
            {
                name:name,
                rating:parseInt(rating)
            });
    }
}

var movie_obj = new movie();

var movie_name = document.getElementById('movie-name');
var movie_rating = document.getElementById('movie-rating');
var result_list = document.getElementById('result-list');

//    var add_movie = document.getElementById('add-movie');
//    add_movie.addEventListener("click",AddMovie());

//    var evaluate_movie = document.getElementById('evaluate-movie');
//    evaluate_movie.addEventListener("click",EvaluateMovie());

    movie.prototype.TopMovie = function(){
        var sorted_list = this.movie_list.sort(function(x,y){
            return y.rating - x.rating;
        });
        return sorted_list[0];
    };

function AddMovie(){
    var movie_name_value = movie_name.value.trim();
    var movie_rating_value = movie_rating.value;

    if(movie_name_value && movie_rating_value){
        movie_obj.AddMovie(movie_name_value,movie_rating_value);
        result_list.innerHTML  +="<li>" + movie_name_value + " ------- " + movie_rating_value + "</li>";
    }else{
        alert("Please Enter a Valid Input");
    }
    
}

function EvaluateMovie(){
    var result_obj = movie_obj.TopMovie();
    if(result_obj){
        alert(result_obj.name + " is the top rated movie with rating " + result_obj.rating + " !!");
    }else{
        alert('No Movies Entered !!');
    }
    
}