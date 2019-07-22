package org.boutique.catalogue.service;

import java.util.Collection;
import org.boutique.catalogue.dao.ProduitRepository;
import org.boutique.catalogue.exception.ProduitNotFoundException;
import org.boutique.catalogue.model.Produit;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ProduitServiceImpl implements ProduitService {
	
	private ProduitRepository productRepository;
	
	public ProduitServiceImpl(ProduitRepository productRepository) {
		this.productRepository = productRepository;
	}
	
	@Override
	public Collection<Produit> getAllProduits(){
		return productRepository.findAll();
	}

	/*public Optional<Product> getProduct(long id) {
		return productRepository.findById(id);
	}*/
	
	public Produit getProduit(long id) {
		return productRepository
				.findById(id)
				.orElseThrow(() -> new ProduitNotFoundException(" Produit non trouvé"));
	}
	
	 public Produit save(Produit product) {
	        return productRepository.save(product);
	    }
	
	
}
