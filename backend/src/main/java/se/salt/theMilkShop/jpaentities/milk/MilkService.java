package se.salt.theMilkShop.jpaentities.milk;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;
import se.salt.theMilkShop.models.MilkDTO;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

@Service
public class MilkService {

    @Autowired
    MilkRepository milkRepo;

    public List<Milk> getAllMilks() {
        //List<Milk> list = fillDataBaseFromJSonFile();
        return milkRepo.findAllMilks();
    }

    public List<Milk> saveAll(List<Milk> milks) {
        return milkRepo.saveAllMilks(milks);
    }


    public Milk addNewMilk(MilkDTO milkDTO) {
        return milkRepo.addNewMilk(new Milk(milkDTO.name(), milkDTO.type(), milkDTO.storage()));
    }

    public Milk getMilkById(UUID id) {
        return milkRepo.getMilk(id);
    }

    public Milk updateMilk(UUID id, MilkDTO milkDTO) {
        Milk milkToUpdate = getMilkById(id);
        if (milkToUpdate == null) return null;

        int storage = milkToUpdate.getStorage();
        int orderQty = milkDTO.storage();
        milkToUpdate.setStorage(storage-orderQty);
        return milkRepo.updateMilk(milkToUpdate);
    }


}
