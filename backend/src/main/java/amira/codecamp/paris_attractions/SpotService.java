package amira.codecamp.paris_attractions;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SpotService {
    
    @Autowired
    private SpotRepository spotRepository;

    public List<Spot> allSpots(){
        return spotRepository.findAll();
    }

    public Optional<Spot> oneSpot(String placeid){
        return spotRepository.findSpotByPlaceid(placeid);
    }

}
