package com.example.case1;

import com.example.case1.Entities.sd_owners;
import com.example.case1.Repositories.sd_ownersRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Case1Application {

	private static final Logger log = LoggerFactory.getLogger(Case1Application.class);

	@Bean
	public CommandLineRunner demo(sd_ownersRepository repository) {
		return (args) -> {
			// save a few Owners
			String str = "SuperSecretPassword";
			byte password[] = str.getBytes();
			repository.save(new sd_owners("Jack", "Bauer", "jack@bauer.com", password, true,
			                new java.sql.Date(System.currentTimeMillis())));
			
			// fetch all Owners
			log.info("Owners found with findAll():");
			log.info("-------------------------------");
			for (sd_owners Owner : repository.findAll()) {
				log.info(Owner.toString());
			}
			log.info("");

			// fetch an individual Owner by ID
			sd_owners Owner = repository.findByownerid(1L);
			log.info("Owner found with findById(1L):");
			log.info("--------------------------------");
			log.info(Owner.toString());
			log.info("");

			// fetch Owners by last name
			log.info("Owner found with findByLastName('Bauer'):");
			log.info("--------------------------------------------");
			repository.findBylastname("Bauer").forEach(bauer -> {
				log.info(bauer.toString());
			});
			// for (Owner bauer : repository.findByLastName("Bauer")) {
			//  log.info(bauer.toString());
			// }
			log.info("");
		};
  }


	public static void main(String[] args) {
		SpringApplication.run(Case1Application.class, args);
	}

}