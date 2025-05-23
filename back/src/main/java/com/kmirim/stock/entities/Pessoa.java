package com.kmirim.stock.entities;

import jakarta.persistence.*;


@Entity
@Table (name = "pessoas")
public class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;

    public Pessoa(){}

    public Long getId(){
        return id;
    }
    //Metodo para setar o id
    public void setId(Long id){
        this.id = id;
    }
    //Getters e Setters
    public String getNome(){
        return nome;
    }
    public void setNome(String nome){
        this.nome = nome;
    }
}
