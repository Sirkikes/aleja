package com.trabajo.web.app.daos;

import org.springframework.data.repository.CrudRepository;

import com.trabajo.web.app.models.Cliente;

public interface IClienteRepository extends CrudRepository<Cliente, Integer> {

}
