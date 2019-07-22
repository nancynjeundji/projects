package org.boutique.catalogue.dto;

import org.boutique.catalogue.model.Produit;

import lombok.Data;

@Data
public class CommandeProduitDto {
	
	private int id;
	
	private Produit produit;
	
	private Integer quantite;
	

}
