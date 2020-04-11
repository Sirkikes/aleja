package com.trabajo.web.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trabajo.web.app.daos.IClienteRepository;
import com.trabajo.web.app.models.Cliente;

@Service
public class ClienteServiceImpl implements ClienteService{
	
	@Autowired
	private IClienteRepository iClienteRepository;

	@Override
	@Transactional(readOnly=true)
	public List<Cliente> getCliente() {
		return (List<Cliente>) iClienteRepository.findAll();
	}

	@Override
	public void saveCliente(Cliente cliente) {
		iClienteRepository.save(cliente);
	}

	@Override
	@Transactional(readOnly=true)
	public Cliente getCliente(Integer Id) {
		// TODO Auto-generated method stub
		return iClienteRepository.findById(Id).get();
	}

	@Override
	public void deleteCliente(Integer Id) {
		// TODO Auto-generated method stub
		iClienteRepository.deleteById(Id);
	}

}
