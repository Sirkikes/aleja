package com.trabajo.web.app.services;

import java.util.List;

import com.trabajo.web.app.models.Medicamentos;

public interface MedicamentosServices {

	public List<Medicamentos> getMedicamentos();

	public void saveMedicamentos(Medicamentos medicamentos);

	public Medicamentos getMedicamentos(Integer Id);

	public void deleteMedicamentos(Integer Id);

}
