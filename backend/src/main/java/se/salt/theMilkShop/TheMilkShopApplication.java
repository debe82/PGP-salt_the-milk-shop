package se.salt.theMilkShop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;



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
