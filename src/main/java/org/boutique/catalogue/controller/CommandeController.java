package org.boutique.catalogue.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.boutique.catalogue.dto.CommandeProduitDto;
import org.boutique.catalogue.model.Commande;
import org.boutique.catalogue.model.CommandeProduit;
import org.boutique.catalogue.model.Produit;
import org.boutique.catalogue.model.StatusCommandeEnum;
import org.boutique.catalogue.service.CommandeProduitService;
import org.boutique.catalogue.service.CommandeService;
import org.boutique.catalogue.service.ProduitService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class CommandeController {

	private ProduitService produitService;
	private CommandeService commandeService;
	private CommandeProduitService commandeProduitService;
	
	public CommandeController(ProduitService produitService, CommandeService commandeService,
			CommandeProduitService commandeProduitService) {
		this.produitService = produitService;
		this.commandeService = commandeService;
		this.commandeProduitService = commandeProduitService;
	}
	
	@PostMapping(value = "/commandes", consumes = "application/json", produces = "application/json")
	public ResponseEntity<Commande> create (@RequestBody Collection<CommandeProduitDto> commandeProduitDto){

		// on pourrait ajouter une methode pour valider les champs 
		
		Commande cmd = new Commande();
		// creer la commande d'abord pour obtenir son id
		cmd = commandeService.creer(cmd);
		
		List<CommandeProduit> cmdPdt = new ArrayList<>();
		for (CommandeProduitDto dto : commandeProduitDto) {
			Produit pdt = produitService.getProduit(dto.getProduit().getId());
			cmdPdt.add(commandeProduitService.creer(
							new CommandeProduit(cmd, pdt , dto.getQuantite()))); 
		}
		
		cmd.setCommandeProduits(cmdPdt);
		cmd.setStatus(StatusCommandeEnum.PAYE.name());
		commandeService.mettreAjour(cmd);
		
		//possibilité de creer une URI à mettre dans le header pour responseEntity

	 return new ResponseEntity<>(cmd,HttpStatus.CREATED);
	}
	
	

}
