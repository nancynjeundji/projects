package org.boutique.catalogue.services;

import java.util.Collection;

import org.boutique.catalogue.model.Commande;

public interface CommandeService {
	
	public Collection<Commande> getAllCommandes();
	
	public Commande creer(Commande commande);
	
	public void mettreAjour(Commande commande);

}
