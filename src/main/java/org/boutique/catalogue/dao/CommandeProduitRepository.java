package org.boutique.catalogue.dao;

import org.boutique.catalogue.model.CommandeProduit;
import org.boutique.catalogue.model.CommandeProduitJoint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;


public interface CommandeProduitRepository  extends JpaRepository<CommandeProduit, CommandeProduitJoint>{

}
