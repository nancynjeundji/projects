package org.boutique.catalogue.dao;

import org.boutique.catalogue.model.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
public interface ProduitRepository extends JpaRepository<Produit, Long>{

}
