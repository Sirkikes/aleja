package com.trabajo.web.app.services;

import java.util.List;

import com.trabajo.web.app.models.Cliente;

public interface ClienteService {
	
	public List<Cliente> getCliente();
	
	public void saveCliente(Cliente cliente);

	public Cliente getCliente(Integer Id);

	public void deleteCliente(Integer Id);
	

}
