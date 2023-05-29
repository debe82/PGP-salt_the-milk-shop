package se.salt.theMilkShop.jpaentities.milk;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Repository;
import se.salt.theMilkShop.models.MilkDTO;

import java.util.List;
import java.util.UUID;

@Repository
public class MilkRepository {

    @Autowired
    IJpaMilkRepository jpaRepo;

    public List<Milk> findAllMilks() {
        Iterable<Milk> all = jpaRepo.findAll();
        return Streamable.of(all).toList();
    }

    public List<Milk> saveAllMilks(List<Milk> milks) {
        return jpaRepo.saveAll(milks);
    }

    public Milk addNewMilk(Milk milk) {
        return jpaRepo.save(milk);
    }

    public Milk getMilk(UUID id) {
        return jpaRepo.findById(id).orElse(null);
    }
}
