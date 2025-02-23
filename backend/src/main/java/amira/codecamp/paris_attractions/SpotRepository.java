package amira.codecamp.paris_attractions;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpotRepository extends MongoRepository<Spot, ObjectId> {

    Optional<Spot> findSpotByPlaceid(String placeid);
    
}
