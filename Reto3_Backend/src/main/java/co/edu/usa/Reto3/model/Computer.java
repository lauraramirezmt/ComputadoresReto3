/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.edu.usa.Reto3.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author Laura
 */

/**
 * constuctor entidad
 * @author Laura
 */
@Entity
@Table(name="computer")
public class Computer implements Serializable{
   
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    /**
     * variables
     */
    private Integer idComputadores;
    private String brand;
    private Integer year;
    private String name;
    private String description;
    
    /**
     * relacion muchos a uno
     */
    @ManyToOne
    /**
     * columna
     */
    @JoinColumn(name="categoryId")
    /**
     * ignorar propiedades
     */
    @JsonIgnoreProperties("computers")
    private Category category;
    /**
     * relacion uno a muchos
     */
    @OneToMany(cascade={CascadeType.PERSIST},mappedBy = "computers")
    /**
     * ignorar propiedades
     */
    @JsonIgnoreProperties({"computers","client"})
    private List<Message> messages;

    public List<Message> getMessage() {
        return messages;
    }
    
    public void setMessage(List<Message> message) {
        this.messages = message;
    }
    /**
     * relacion uno a muchos
     */
    @OneToMany(cascade={CascadeType.PERSIST},mappedBy = "computer")
    /**
     * ignorar propiedades
     */
    @JsonIgnoreProperties({"computers","client"})
    private List<Reservations> reservations;
     /**
     * get categoria
     */
    public Category getCategory() {
        return category;
    }
     /**
     * set categoria
     */
    public void setCategory(Category category) {
        this.category = category;
    }
     /**
     * get reservaciones
     */
    public List<Reservations> getReservations() {
        return reservations;
    }
    /**
     * set reservaciones
     */
    public void setReservations(List<Reservations> reservations) {
        this.reservations = reservations;
    }
    /**
     * get computadores
     */
    public Integer getIdComputadores() {
        return idComputadores;
    }
    /**
     * set computadores
     */
    public void setIdComputers(Integer idComputadores) {
        this.idComputadores = idComputadores;
    }
    /**
     * get name
     */
    public String getName() {
        return name;
    }
    /**
     * set name
     */
    public void setName(String name) {
        this.name = name;
    }
    /**
     * get brand
     */
    public String getBrand() {
        return brand;
    }
    /**
     * set brand
     */
    public void setBrand(String brand) {
        this.brand = brand;
    }
    /**
     * get year
     */
    public Integer getYear() {
        return year;
    }
    /**
     * set year
     */
    public void setYear(Integer year) {
        this.year = year;
    }
    /**
     * get descripcion
     */
    public String getDescription() {
        return description;
    }
    /**
     * set descripcion
     */
    public void setDescription(String description) {
        this.description = description;
    }

    public Object getId() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
    
    
}
