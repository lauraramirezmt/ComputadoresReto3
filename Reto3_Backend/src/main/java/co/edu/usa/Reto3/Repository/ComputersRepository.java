/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.edu.usa.Reto3.Repository;

import co.edu.usa.Reto3.model.Computers;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import co.edu.usa.Reto3.CrudRepository.ComputersCrudRepository;

/**
 *
 * @author Laura
 */
@Repository
public class ComputersRepository {
    @Autowired
    private ComputersCrudRepository computersCrudRepository;
    
   public List<Computers> getAll(){
       return(List<Computers>) computersCrudRepository.findAll();
   }
   public Optional<Computers> getComputers(int idComputadores){
       return computersCrudRepository.findById(idComputadores);
   }
   
   public Computers save(Computers c){
       return computersCrudRepository.save(c);
   }
   
   public void delete (Computers c){
       computersCrudRepository.delete(c);
   }
}
