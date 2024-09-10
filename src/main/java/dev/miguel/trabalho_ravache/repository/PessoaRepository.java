package dev.miguel.trabalho_ravache.repository;

import dev.miguel.trabalho_ravache.model.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PessoaRepository extends JpaRepository<Pessoa, Long> {
}
