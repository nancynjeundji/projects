package org.boutique.catalogue.service;

import java.util.Collection;

import org.boutique.catalogue.model.Produit;

public interface ProduitService {
	
	public Collection<Produit> getAllProduits();
	
	public Produit getProduit(long id);
	
	public Produit save(Produit product);

}
