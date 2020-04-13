package com.trabajo.web.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.trabajo.web.app.models.Cliente;
import com.trabajo.web.app.services.ClienteService;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class ClienteController {
	
	@Autowired
	private ClienteService clienteService;
	
	
	@GetMapping("/clientes")
	public List<Cliente> getClientes() {
		return clienteService.getCliente();
	}

	@GetMapping("/clientes/{clienteId}")
	public Cliente getCliente(@PathVariable int clienteId) {

		Cliente cliente = clienteService.getCliente(clienteId);

		return cliente;
	}

	
	@PostMapping("/clientes")
	@ResponseStatus(HttpStatus.CREATED)
	public Cliente addCliente(@RequestBody Cliente cliente) {

		cliente.setId(null);
		clienteService.saveCliente(cliente);
		return cliente;
	}
	
		
	@PutMapping("/clientes")
	@ResponseStatus(HttpStatus.CREATED)
	public Cliente updateCliente(@RequestBody Cliente cliente) {
		
		clienteService.saveCliente(cliente);
		return cliente;
	}
	
	@DeleteMapping("/clientes/{clienteId}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteCliente(@PathVariable int clienteId) {
		
		clienteService.deleteCliente(clienteId);
	}

}
