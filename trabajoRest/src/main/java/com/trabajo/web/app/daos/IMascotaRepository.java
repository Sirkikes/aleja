package com.trabajo.web.app.daos;

import org.springframework.data.repository.CrudRepository;

import com.trabajo.web.app.models.Mascota;

public interface IMascotaRepository extends CrudRepository<Mascota, Integer> {

}
