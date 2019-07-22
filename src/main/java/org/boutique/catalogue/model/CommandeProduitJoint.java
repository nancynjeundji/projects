package org.boutique.catalogue.model;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;


@Data
@Embeddable
public class CommandeProduitJoint  implements Serializable{
	
	private static final long SerialVersionUID = 1L;
	
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "commande_id")
    private Commande commande;
 
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "produit_id")
    private Produit produit;
}
