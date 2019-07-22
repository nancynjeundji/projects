package org.boutique.catalogue.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Transient;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor 
@NoArgsConstructor(force = true)
public class Commande implements Serializable {
	
	@Id @GeneratedValue (strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String	status;
		
	@OneToMany(mappedBy ="pk.commande")
	//private List<CommandeProduit> commandeProduits = new ArrayList<>();
	private List<CommandeProduit> commandeProduits;	
	@Transient
	public Double totalCommande() {	
		double somme = 0D;
		
		List<CommandeProduit> commandeProduits = getCommandeProduits();
		for( CommandeProduit cp : commandeProduits) {
			somme += cp.getTotalPrix();
		}
		return somme;
	};
	

}
