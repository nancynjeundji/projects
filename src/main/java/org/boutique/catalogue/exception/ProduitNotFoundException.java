package org.boutique.catalogue.exception;

public class ProduitNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	public  ProduitNotFoundException() {
		super();	
	}
	
	public  ProduitNotFoundException(final String message) {
		super(message);	
	}
}
