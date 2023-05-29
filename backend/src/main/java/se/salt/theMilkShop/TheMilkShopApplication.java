package se.salt.theMilkShop;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.data.repository.init.Jackson2RepositoryPopulatorFactoryBean;
import se.salt.theMilkShop.jpaentities.milk.Milk;
import se.salt.theMilkShop.jpaentities.milk.MilkService;
import se.salt.theMilkShop.models.MilkListFileDTO;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;


@SpringBootApplication
public class TheMilkShopApplication {

	public static void main(String[] args){

		SpringApplication.run(TheMilkShopApplication.class, args);

	}


/*
	@Bean
	CommandLineRunner runner(MilkService userService) {
		return args -> {
			// read json and write to db
			ObjectMapper mapper = new ObjectMapper();
			TypeReference<List<Milk>> typeReference = new TypeReference<List<Milk>>(){};
			InputStream inputStream = TypeReference.class.getResourceAsStream("/json/users.json");
			try {
				List<Milk> users = mapper.readValue(inputStream,typeReference);
				userService.saveAll(users);
				System.out.println("Users Saved!");
			} catch (IOException e){
				System.out.println("Unable to save users: " + e.getMessage());
			}
		};
	}*/


}
