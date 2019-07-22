package org.boutique.catalogue.model;

import java.io.Serializable;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Transient;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommandeProduit  implements Serializable {

	/*@EmbeddedId
	@JsonIgnore
	private CommandeProduitJoint pk; */
	
	@EmbeddedId
	private CommandeProduitJoint pk;	
	private Integer quantite;
	
	public CommandeProduit(Commande cmde, Produit produit, Integer quantite) {
    	pk = new CommandeProduitJoint();
        pk.setCommande(cmde);
        pk.setProduit(produit);
        this.quantite = quantite;
    }
	
	 @Transient
	    public Produit getProduit() {
	        return this.pk.getProduit();
	    }
	 
	 @Transient
	    public Double getTotalPrix() {
	        return getProduit().getPrix() * getQuantite();
	    }


}