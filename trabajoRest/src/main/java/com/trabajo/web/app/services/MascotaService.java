package com.trabajo.web.app.services;

import java.util.List;

import com.trabajo.web.app.models.Mascota;

public interface MascotaService {

	public List<Mascota> getMascota();

	public void saveMascota(Mascota mascota);

	public Mascota getMascota(Integer Id);

	public void deleteMascota(Integer Id);

}
