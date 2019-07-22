package org.boutique.catalogue.controller;

import java.util.Collection;

import org.boutique.catalogue.model.Produit;
import org.boutique.catalogue.service.ProduitService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/produits")
public class ProduitController {
	

	private ProduitService produitService;
	 
	 public ProduitController(ProduitService produitService) {
		 this.produitService = produitService;
	 }
	 
	@GetMapping
    public  Collection<Produit> Produits() {
        return produitService.getAllProduits();
    }
 
	 @GetMapping("/{id}")
	 public Produit getProduitById(@PathVariable Long id) {
		 return produitService.getProduit(id);
	 }
	 
	 @GetMapping("/test")
	 public String test() {
		 return "Hello le controller";
	 }
}
