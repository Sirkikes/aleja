package com.trabajo.web.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trabajo.web.app.daos.IMedicamentoRepository;
import com.trabajo.web.app.models.Medicamentos;

@Service
public class MedicamentosServicesImpl implements MedicamentosServices{
	
	@Autowired
	private IMedicamentoRepository iMedicamentoRepository;

	@Override
	@Transactional(readOnly=true)
	public List<Medicamentos> getMedicamentos() {
		return (List<Medicamentos>) iMedicamentoRepository.findAll();
	}

	@Override
	public void saveMedicamentos(Medicamentos medicamentos) {
		iMedicamentoRepository.save(medicamentos);
	}

	@Override
	@Transactional(readOnly=true)
	public Medicamentos getMedicamentos(Integer Id) {
		// TODO Auto-generated method stub
		return iMedicamentoRepository.findById(Id).get();
	}

	@Override
	public void deleteMedicamentos(Integer Id) {
		iMedicamentoRepository.deleteById(Id);
		
	}
	
	

}
