package org.boutique.catalogue.dao;

import org.boutique.catalogue.model.Commande;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
public interface CommandeRepository  extends JpaRepository<Commande, Long>{

}
