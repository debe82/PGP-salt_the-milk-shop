package se.salt.theMilkShop.jpaentities.milk;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface IJpaMilkRepository extends JpaRepository<Milk, UUID> {
//public interface IJpaMilkRepository extends MongoRepository<Milk, UUID> {

}
