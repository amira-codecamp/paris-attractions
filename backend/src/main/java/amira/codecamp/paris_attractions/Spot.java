package amira.codecamp.paris_attractions;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection="spots")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Spot {
    @Id
    private ObjectId id;
    private String placeid;
    private String name;
    private String startdate;
    private Address address;
    private String video;
    private List<String> tags;
    private String image;
    private List<String> backdrops;
    @DocumentReference
    private List<Review> reviewsids;

}
