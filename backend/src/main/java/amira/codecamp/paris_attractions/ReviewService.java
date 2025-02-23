package amira.codecamp.paris_attractions;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
    
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Review addReview(String body, String rate, String placeid){

        Review review = reviewRepository.insert(new Review(body, rate));

        mongoTemplate.update(Spot.class)
                .matching(Criteria.where("placeid").is(placeid))
                .apply(new Update().push("reviewsids").value(review))
                .first();

        return review;

    }

}
