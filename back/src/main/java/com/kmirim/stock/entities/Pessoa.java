package com.kmirim.stock.entities;

import jakarta.persistence.*;


@Entity
@Table (name = "pessoas")
public class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String nomesocial;
    private String email;
    private Integer cep;
    private String rua;
    private String numero;
    private String complemento;
    private String bairro;
    private String cidade;
    private String uf;

    public Pessoa(){}

    //id
    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id = id;
    }

    //nome
    public String getNome(){
        return nome;
    }
    public void setNome(String nome){
        this.nome = nome;
    }

    //nomesocial

    public String getNomesocial(){
        return nomesocial;
    }
    public void setNomesocial(String nomesocial) {
        this.nomesocial = nomesocial;
    }

    //email
    public String getEmail(){
        return email;
    }
    public void setEmail(String email){
        this.email = email;
    }

    //cep
    public Integer getCep(){
        return cep;
    }
    public void setCep(Integer cep){
        this.cep = cep;
    }

    //rua
    public String getRua(){
        return rua;
    }
    public void setRua(String rua){
        this.rua = rua;
    }

    //numero
    public String getNumero(){
        return numero;
    }
    public void setNumero(String numero){
        this.numero = numero;
    }

    //complemento
    public String getComplemento(){
        return complemento;
    }
    public void setComplemento(String complemento){
        this.complemento = complemento;
    }

    //bairro
    public String getBairro(){
        return bairro;
    }
    public void setBairro(String bairro){
        this.bairro = bairro;
    }

    //cidade
    public String getCidade(){
        return cidade;
    }
    public void setCidade(String cidade){
        this.cidade = cidade;
    }

    //uf
    public String getUf(){
        return uf;
    }
    public void setUf(String uf){
        this.uf = uf;
    }

}
