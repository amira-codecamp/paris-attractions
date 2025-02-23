package amira.codecamp.paris_attractions;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class ReviewController {
    
    @Autowired
    private ReviewService reviewService;

    @PostMapping("/{placeid}")
    public ResponseEntity<Review> postReview(@PathVariable String placeid,@RequestBody Map<String, String> payload){
        return new ResponseEntity<Review>(reviewService.addReview(payload.get("body"), payload.get("rate"), placeid), HttpStatus.CREATED);
    }

}
