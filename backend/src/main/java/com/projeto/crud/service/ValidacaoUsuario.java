package com.projeto.crud.service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.projeto.crud.model.Usuario;
import com.projeto.crud.repository.UsuarioRepository;
 

public class ValidacaoUsuario {

	private UsuarioRepository usuarioDB;

	public ValidacaoUsuario(UsuarioRepository usuarioDB) {

		this.usuarioDB = usuarioDB;
	}

	public ResponseEntity<Object> validaCpfExistente(Usuario usuario) {

		if (usuarioDB.findByCpf(usuario.getCpf()) != null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Cpf existente.");
		} else {
			return null;
		}
	}
 
}
