package se.salt.theMilkShop.jpaentities.milk;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.salt.theMilkShop.models.MilkDTO;

import java.net.URI;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/milks")
@CrossOrigin(origins = "http://localhost:3000")
public class MilkController {

    @Autowired
    MilkService milkService;

    @GetMapping
    ResponseEntity<List<Milk>> getAllMilks(){
        List<Milk> listOfMilks = milkService.getAllMilks();
        return ResponseEntity.ok().body(listOfMilks);
    }
    @GetMapping("{id}")
    ResponseEntity<Milk> getCity(@PathVariable UUID id){
        if (id.equals(null)) return ResponseEntity.badRequest().build();
        if (milkService.getMilkById(id) == null) return ResponseEntity.notFound().build();

        return ResponseEntity.ok(milkService.getMilkById(id));
    }
    @PostMapping
    ResponseEntity<Milk> addMilk(@RequestBody MilkDTO milkDTO, HttpServletRequest req){
        Milk newMilk = milkService.addNewMilk(milkDTO);
        if (newMilk == null) return ResponseEntity.unprocessableEntity().build();
        URI location = URI.create(req.getRequestURL() + "/" + newMilk.getId());
        return ResponseEntity.created(location).body(newMilk);
    }

}
