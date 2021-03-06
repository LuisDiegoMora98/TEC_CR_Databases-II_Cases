package com.example.case1;

import com.example.case1.Entities.Owner;
import com.example.case1.Entities.Problem;
import com.example.case1.Repositories.OwnerRepository;
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
	public CommandLineRunner demo(OwnerRepository repository) {
		return (args) -> {
			// save a few Owners
			String str = "SuperSecretPassword";
			byte password[] = str.getBytes();

			//Here we saved Jack, but since already runned it, I'll comment it to keep testing
			/*repository.save(new Owner("Jack", "Bauer", "jack@bauer.com", password, true,
			                new java.sql.Date(System.currentTimeMillis())));*/

			// fetch all Owners
			System.out.println("\n\nOwners found with findAll():\n");
			for (Owner Owner : repository.findAll()) {
				System.out.println(Owner.toString());
			}

			// fetch an individual Owner by ID
			Owner Owner = repository.findByownerid(1L);
			System.out.println("\nOwner found with findById(1L):\n\n");

			System.out.println(Owner.toString() + "\n");

			// fetch Owners by last name
			System.out.println("\nOwner found with findByLastName('Bauer'):\n");
			repository.findBylastname("Bauer").forEach(bauer -> {
				System.out.println(bauer.toString());
			});

			//Here we use one owner mapped to many problems.
			Owner jack = repository.findByownerid(6L);		//fletch an "owner" from DB
			//creates two "problems" to map to "owner"
			Problem problem1 = new Problem("Jack's trouble", "Once uppon a time there was a Jack...",
													new java.sql.Date(System.currentTimeMillis()),
													true, 6L, jack);
			Problem problem2 = new Problem("Jack's trouble #2", "And that Jack didn't want to live...",
													new java.sql.Date(System.currentTimeMillis()),
													true, 6L, jack);
			Set<Problem> manyProblems = new HashSet<Problem>();
			manyProblems.add(problem1);
			manyProblems.add(problem2);

			//Sets a group of "problems" to "owner"
			//To see One-To-Many relation between tables "owners" & "problems" please refer to
			//Owner and Problem classes, lines 31-32 and lines 34-36 respectively
			jack.setProblems(manyProblems);


			SessionFactory sessionFactory = null;
        	Session session = null;
        	Transaction tx = null;

			//Here we are using a Transaction from Code!
			//The transaction inserts into TWO tables: "problems" & "owners"
			try {
				sessionFactory = HibernateUtil.getSessionFactory();		//Singleton object that allows to create session objects
				session = sessionFactory.getCurrentSession();			//provides session object which is in hibernate context and managed by hibernate internally
				//Please refer to package com.example.case1.utils to see the connection pool management
				System.out.println("\n\nSession created");
						
				tx = session.beginTransaction();		//indicates beginning of transaction
				session.save(problem1);					//inserts into "problems" & "owners"
				session.save(problem2);
				session.save(jack);

				//shows success message
				System.out.println("Jack ID=" + jack.getOwnerid());
				System.out.println("Problem1 ID=" + problem1.getProblemid()
				+ ", Foreign Key Jack ID=" + problem1.getOwner().getOwnerid());
				System.out.println("item2 ID=" + problem2.getProblemid()
				+ ", Foreign Key Jack ID=" + problem2.getOwner().getOwnerid());

				tx.commit();	//commits transaction
				System.out.println("\n\nFinished\n\n");

			} catch (Exception e) {
				tx.rollback();	//erase all modifications made to the DB during the transaction in case of error
				System.out.println("Error found: " + e.toString());
			}

		};
  }


	public static void main(String[] args) {
		SpringApplication.run(Case1Application.class, args);
	}

}