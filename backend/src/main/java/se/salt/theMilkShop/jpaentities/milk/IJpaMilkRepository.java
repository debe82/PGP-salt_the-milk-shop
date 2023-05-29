package se.salt.theMilkShop.jpaentities.milk;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface IJpaMilkRepository extends JpaRepository<Milk, UUID> {
}
