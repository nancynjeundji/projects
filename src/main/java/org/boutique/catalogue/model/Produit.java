package org.boutique.catalogue.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class Produit implements Serializable {
	
	@Id @GeneratedValue (strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull(message ="Le nom du produit est obligatoire")
	private String nom;
	
	private double prix;
	
	private String detail;
	
	private String photo;
	
	@ManyToOne
	private Categorie categorie;
	
	private boolean selected;

}
