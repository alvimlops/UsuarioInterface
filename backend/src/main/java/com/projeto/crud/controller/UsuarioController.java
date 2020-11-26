package com.projeto.crud.controller;

import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
 
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.crud.model.Usuario;
import com.projeto.crud.repository.UsuarioRepository;
import com.projeto.crud.service.ValidacaoUsuario;
 

@RestController
@RequestMapping("usuario")
public class UsuarioController {

	@Autowired
	private UsuarioRepository usuarioDB;

	private final String USUARIO_INEXISTENTE = "Usuario inexistente.";

	@ExceptionHandler({ HttpMessageNotReadableException.class })
	public ResponseEntity<Object> handleException(HttpMessageNotReadableException ex) {
		return ResponseEntity.badRequest().body(ex.getMostSpecificCause().getMessage());
	}

	@PostMapping
	public ResponseEntity<Object> postUsuario(@RequestBody Usuario object) throws Exception {

		if (object.getId() != null) {

			var usuario = getById(object.getId().intValue());

			if (!usuario.getBody().equals(USUARIO_INEXISTENTE)) {

				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Usuario existente.");

			}
		}

		var validacao = new ValidacaoUsuario(usuarioDB).validaCpfExistente(object);

		if (validacao != null) {

			return validacao;
		}

		usuarioDB.save(object);
		return ResponseEntity.ok(object);

	}

	@GetMapping(path = "/{id}")
	public ResponseEntity<Object> getById(@PathVariable("id") Integer id) {
		try {
			var usuario = usuarioDB.findById((long) id);

			return ResponseEntity.ok(usuario.get());

		} catch (NoSuchElementException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(USUARIO_INEXISTENTE);
		}
	}

	@GetMapping
	public ResponseEntity<Object> getUsuarios() {
		var usuarios = usuarioDB.findAll();
		if (usuarios.size() == 0) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Nenhum paciente encontrado");
		}

		return ResponseEntity.ok(usuarios);
	}
	@PutMapping
	public ResponseEntity<Object> putUsuario(@RequestBody Usuario object) {
		if (object.getId() == null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("ID Inválido");
		}

		var usuario = getById(object.getId().intValue());

		if (usuario.getBody().equals(USUARIO_INEXISTENTE)) {

			return usuario;

		}
		
	  usuarioDB.save(object);
		return ResponseEntity.ok(object);
	}

	@DeleteMapping(path = "/{id}")
	public ResponseEntity<Object> deleteObject(@PathVariable("id") Integer id) {
		var usuario = getById(id);

		if (usuario.getBody().equals(USUARIO_INEXISTENTE)) {

			return usuario;
		}

		usuarioDB.deleteById((long) id);

		return ResponseEntity.ok(null);
	}

	  
}
