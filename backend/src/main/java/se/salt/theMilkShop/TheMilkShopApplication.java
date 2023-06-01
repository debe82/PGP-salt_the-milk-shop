package se.salt.theMilkShop;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import se.salt.theMilkShop.jpaentities.milk.Milk;
import se.salt.theMilkShop.jpaentities.milk.MilkService;
import se.salt.theMilkShop.models.MilkFileDTO;
import se.salt.theMilkShop.models.MilkListFileDTO;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;


@SpringBootApplication
public class TheMilkShopApplication {

	public static void main(String[] args) {

		SpringApplication.run(TheMilkShopApplication.class, args);

	}

	@Bean
	CommandLineRunner runner(MilkService milkService) { //CommandLineRunner allows to do something when the app starts
		return args -> {
			//read json
			ObjectMapper mapper = new ObjectMapper();
			TypeReference<MilkListFileDTO> typeReference = new TypeReference<MilkListFileDTO>(){};
			InputStream inputStream = TypeReference.class.getResourceAsStream("/milk.json");
			System.out.println("inputStream: " + inputStream);
			//write in db
			try {
				MilkListFileDTO milkListFileDTO = mapper.readValue(inputStream, typeReference);
				List<MilkFileDTO> milkFileDtoList = milkListFileDTO.results();
				List<Milk> milks =new ArrayList<>();
				for (MilkFileDTO milkFileDTO : milkFileDtoList) {
					milks.add(new Milk(milkFileDTO.name(), milkFileDTO.type(), milkFileDTO.storage()));
				}
				milkService.saveAll(milks);
			} catch (IOException e) {
				System.out.println("Error: " +e.getMessage());
			}
		};

	}


}
