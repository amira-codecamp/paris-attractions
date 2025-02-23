package amira.codecamp.paris_attractions;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class SpotController {

    @Autowired
    private SpotService spotService;
    
    @GetMapping("/spots")
    public ResponseEntity<List<Spot>> getAllSpots(){
        return new ResponseEntity<List<Spot>>(spotService.allSpots(), HttpStatus.OK);
    }

    @GetMapping("/{placeid}")
    public ResponseEntity<Optional<Spot>> getOneSpot(@PathVariable String placeid){
        return new ResponseEntity<Optional<Spot>>(spotService.oneSpot(placeid), HttpStatus.OK);
    }

}
