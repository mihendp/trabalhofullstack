package dev.miguel.trabalho_ravache.controller;

import dev.miguel.trabalho_ravache.model.Pessoa;
import dev.miguel.trabalho_ravache.repository.PessoaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pessoa")
@RequiredArgsConstructor
public class PessoaController {
    private final PessoaRepository pessoaRepository;

    @GetMapping
    public ResponseEntity<List<Pessoa>> getPessoas(){
        return ResponseEntity.status(HttpStatus.OK).body(pessoaRepository.findAll());
    }


    @PostMapping
    @CrossOrigin(origins = "http://localhost:63342")
    public ResponseEntity<Pessoa> savePessoa(@RequestBody Pessoa pessoa){
        return ResponseEntity.status(HttpStatus.OK).body(pessoaRepository.save(pessoa));
    }
}
