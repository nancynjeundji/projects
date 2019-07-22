package org.boutique.catalogue.services;

import java.util.Collection;

import org.boutique.catalogue.dao.CommandeRepository;
import org.boutique.catalogue.model.Commande;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class CommandeServiceImpl implements CommandeService {

	
	private CommandeRepository commandeRepository;
	
	public CommandeServiceImpl(CommandeRepository commandeRepository) {
		this.commandeRepository = commandeRepository;
	}
	
	
	@Override
	public Collection<Commande> getAllCommandes(){
		return commandeRepository.findAll();
	}
	
	@Override
	public Commande creer(Commande commande) {
		return commandeRepository.save(commande);
	}
	
	@Override
	public void mettreAjour(Commande commande) {
		 commandeRepository.save(commande);
	}
}
