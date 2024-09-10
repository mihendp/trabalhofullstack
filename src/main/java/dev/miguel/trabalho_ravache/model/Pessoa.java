package dev.miguel.trabalho_ravache.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "pessoas")
@Data
public class Pessoa {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String nome;
    private String cpf;
    private String telefone;
}
