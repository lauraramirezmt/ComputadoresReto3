/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.edu.usa.Reto3.service;

import co.edu.usa.Reto3.Repository.ComputadoresRepository;
import co.edu.usa.Reto3.model.Computadores;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Laura
 */
@Service
public class ComputadoresService {
    
    @Autowired
    private ComputadoresRepository computadoresRepository;
    
    public List<Computadores> getAll(){
        return computadoresRepository.getAll();
    }
    
    public Optional<Computadores> getComputadores(int idComputadores){
        return computadoresRepository.getComputadores(idComputadores);
    }
    
    public Computadores save(Computadores c){
        if(c.getIdComputadores()==null){
            return computadoresRepository.save(c);
        }else{
            Optional<Computadores> caux=computadoresRepository.getComputadores(c.getIdComputadores());
            if(caux.isEmpty()){
                return computadoresRepository.save(c);
            }else{
                return c;
            }
        }
    }
    
}
    

