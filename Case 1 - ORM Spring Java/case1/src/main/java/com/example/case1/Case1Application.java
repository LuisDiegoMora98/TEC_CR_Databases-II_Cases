package com.example.case1;

import com.example.case1.Entities.sd_owners;
import com.example.case1.Entities.sd_problems;
import com.example.case1.Repositories.sd_ownersRepository;
import com.example.case1.utils.HibernateUtil;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class Case1Application {

	@Bean
	public CommandLineRunner demo(sd_ownersRepository repository) {
		return (args) -> {
			// save a few Owners
			String str = "SuperSecretPassword";
			byte password[] = str.getBytes();

			//Here we saved Jack, but since already runned it, I'll comment it to keep testing
			/*repository.save(new sd_owners("Jack", "Bauer", "jack@bauer.com", password, true,
			                new java.sql.Date(System.currentTimeMillis())));*/
			
			// fetch all Owners
			System.out.println("\n\nOwners found with findAll():\n");
			for (sd_owners Owner : repository.findAll()) {
				System.out.println(Owner.toString() + "\n");
			}

			// fetch an individual Owner by ID
			sd_owners Owner = repository.findByownerid(1L);
			System.out.println("\nOwner found with findById(1L):\n\n");

			System.out.println(Owner.toString() + "\n");

			// fetch Owners by last name
			System.out.println("\nOwner found with findByLastName('Bauer'):\n\n");
			repository.findBylastname("Bauer").forEach(bauer -> {
				System.out.println(bauer.toString());
			});

			//Here we use one owner mapped to many problems.
			sd_owners jack = repository.findByownerid(6L);

			sd_problems problem1 = new sd_problems("Jack's trouble", "Once uppon a time there was a Jack...",
													new java.sql.Date(System.currentTimeMillis()),
													true, 6L, jack);
			sd_problems problem2 = new sd_problems("Jack's trouble #2", "And that Jack didn't want to live...",
													new java.sql.Date(System.currentTimeMillis()),
													true, 6L, jack);
			Set<sd_problems> manyProblems = new HashSet<sd_problems>();
			manyProblems.add(problem1);
			manyProblems.add(problem2);
			jack.setProblems(manyProblems);

			/* Error: org.hibernate.MappingException: Unknown entity: com.example.case1.Entities.sd_owners
			Still need to fix it
			
			---------- Warning -----------
			| Do not cross this line     |   
			| That code still explodes   |
			| Also has Covid, stay away! |
			---------- Warning -----------	

			SessionFactory sessionFactory = null;
        	Session session = null;
        	Transaction tx = null;

			//Here we are using a Transaction from Code! try catch will tell us if something... or someone dies
			try {
				sessionFactory = HibernateUtil.getSessionFactory();
				session = sessionFactory.getCurrentSession();
				System.out.println("\n\nSession created");
						
				tx = session.beginTransaction();
				System.out.println("Transaction is running...");

				
				System.out.println("Saving problem1...");
				session.save(problem1);
				System.out.println("Saving problem2...");
				session.save(problem2);
				System.out.println("Saving Jack...");
				session.save(jack);
				System.out.println("Transaction is going to commit...");
						
				tx.commit();

				System.out.println("Jack ID=" + jack.getOwnerid());
				System.out.println("Problem1 ID=" + problem1.getProblemid()
				+ ", Foreign Key Jack ID=" + problem1.getOwner().getOwnerid());
				System.out.println("item2 ID=" + problem2.getProblemid()
				+ ", Foreign Key Jack ID=" + problem2.getOwner().getOwnerid());

			} catch (Exception e) {
				System.out.println("Error found: " + e.toString());
			}

			---------- Warning -----------
			| Do not cross this line     |   
			| That code still explodes   |
			| Also has Covid, stay away! |
			---------- Warning -----------			
			*/

		};
  }


	public static void main(String[] args) {
		SpringApplication.run(Case1Application.class, args);
	}

}