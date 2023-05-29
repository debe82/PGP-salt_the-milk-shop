package se.salt.theMilkShop.jpaentities.milk;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
public class Milk {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String name;
    private String type;
    private int storage;
    
    public Milk(String name, String type, int storage) {
        this.name = name;
        this.type = type;
        this.storage = storage;
    }

    public Milk() {
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getStorage() {
        return storage;
    }

    public void setStorage(int storage) {
        this.storage = storage;
    }

    @Override
    public String toString() {
        return "Milk{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", storage=" + storage +
                '}';
    }
}
