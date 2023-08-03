package dev.mani.movies;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection="movies")
@Data  //will add getters, setters, toString ,constructors
@AllArgsConstructor//will take all private fields as arguments
@NoArgsConstructor //will take no parameters
public class Movie {
      @Id
    private Object id;
    private String imdbId;
    private String title;
    private String releaseDate;
    private String trailerLink;
    private List<String>genres;
    private String poster;

    private List<String>backdrops;
    @DocumentReference
    private List<Review> reviewIds;

}
