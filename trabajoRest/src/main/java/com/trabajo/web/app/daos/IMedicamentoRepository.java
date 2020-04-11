package com.trabajo.web.app.daos;

import org.springframework.data.repository.CrudRepository;

import com.trabajo.web.app.models.Medicamentos;

public interface IMedicamentoRepository extends CrudRepository<Medicamentos, Integer> {

}
