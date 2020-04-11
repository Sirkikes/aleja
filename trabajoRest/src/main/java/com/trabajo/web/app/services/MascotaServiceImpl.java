package com.trabajo.web.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trabajo.web.app.daos.IMascotaRepository;
import com.trabajo.web.app.models.Mascota;

@Service
public class MascotaServiceImpl implements MascotaService{
	
	@Autowired
	private IMascotaRepository iMascotaRepository;
	
	@Override
	@Transactional(readOnly=true)
	public List<Mascota> getMascota() {
		return (List<Mascota>) iMascotaRepository.findAll();
	}
	
	@Override
	public void saveMascota(Mascota mascota) {
		iMascotaRepository.save(mascota);
	}

	@Override
	@Transactional(readOnly=true)
	public Mascota getMascota(Integer Id) {
		return iMascotaRepository.findById(Id).get();
	}

	@Override
	public void deleteMascota(Integer Id) {
		iMascotaRepository.deleteById(Id);
	}

}
