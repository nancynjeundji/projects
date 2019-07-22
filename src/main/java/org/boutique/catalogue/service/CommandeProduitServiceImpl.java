package org.boutique.catalogue.service;

import org.boutique.catalogue.dao.CommandeProduitRepository;
import org.boutique.catalogue.model.CommandeProduit;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class CommandeProduitServiceImpl implements CommandeProduitService{

	private CommandeProduitRepository commandeProduitRepository;
	
	public CommandeProduitServiceImpl(CommandeProduitRepository commandeProduitRepository) {
		this.commandeProduitRepository = commandeProduitRepository;
	}
	@Override
	public CommandeProduit creer(CommandeProduit commandeProduit) {
		return commandeProduitRepository.save(commandeProduit);
	}

}
