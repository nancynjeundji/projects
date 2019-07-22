package org.boutique.catalogue.exceptoins;

public class ProduitNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	public  ProduitNotFoundException() {
		super();	
	}
	
	public  ProduitNotFoundException(final String message) {
		super(message);	
	}
}
