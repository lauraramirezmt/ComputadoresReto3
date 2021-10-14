/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.edu.usa.Reto3.Repository;

import co.edu.usa.Reto3.CrudRepository.ComputadoresCrudRepository;
import co.edu.usa.Reto3.model.Computadores;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Laura
 */
@Repository
public class ComputadoresRepository {
    @Autowired
    private ComputadoresCrudRepository computadoresCrudRepository;
    
   public List<Computadores> getAll(){
       return(List<Computadores>) computadoresCrudRepository.findAll();
   }
   public Optional<Computadores> getComputadores(int idComputadores){
       return computadoresCrudRepository.findById(idComputadores);
   }
   
   public Computadores save(Computadores c){
       return computadoresCrudRepository.save(c);
   }
}
