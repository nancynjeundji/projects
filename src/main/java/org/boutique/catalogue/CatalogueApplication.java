package org.boutique.catalogue;


import org.boutique.catalogue.model.Categorie;
import org.boutique.catalogue.model.Produit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

@SpringBootApplication(scanBasePackages = {"org.boutique.catalogue.controller", "org.boutique.catalogue.services"})
public class CatalogueApplication implements CommandLineRunner{
	
	@Autowired
	private RepositoryRestConfiguration repositoryRestConfiguration;

	public static void main(String[] args) {
		SpringApplication.run(CatalogueApplication.class, args);
	}

	public void run(String...args) throws Exception {
		//pour afficher les Ids qu'on va devoir manipuler dans le Front
		repositoryRestConfiguration.exposeIdsFor(Produit.class, Categorie.class);
	}
}
