package com.kmirim.stock.repositories;

import com.kmirim.stock.entities.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {

// Aqui você pode adicionar métodos personalizados, se necessário}
    // Exemplo: List<Pessoa> findByNome(String nome);
}