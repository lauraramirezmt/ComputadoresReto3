/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.edu.usa.Reto3.web;

import co.edu.usa.Reto3.model.Computadores;
import co.edu.usa.Reto3.service.ComputadoresService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Laura
 */
@RestController
@RequestMapping("/api/Computadores")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class ComputadoresController {
    
    @Autowired
    private ComputadoresService computadoresService;
    
    @GetMapping("/all")
    public List<Computadores> getComputador(){
        return computadoresService.getAll();
    }
    
   @GetMapping("/{idComputadores}")
   public Optional<Computadores> getComputadores(@PathVariable("idComputadores")int idComputadores){
       return computadoresService.getComputadores(idComputadores);
   }
           
   @PostMapping("/save")
   @ResponseStatus(HttpStatus.CREATED)
   public Computadores save(@RequestBody Computadores c){
       return computadoresService.save(c);
   }
}
