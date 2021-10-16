package co.usa.reto3.model;

import javax.persistence.*;

@Entity
@Table(name = "computer")
public class Computer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCom;
    private String brandCom;
    private Integer modelCom;
    private Integer categoryId;
    private String nameCom;

    public Integer getIdCom() {
        return idCom;
    }

    public void setIdCom(Integer idCom) {
        this.idCom = idCom;
    }

    public String getBrandCom() {
        return brandCom;
    }

    public void setBrandCom(String brandCom) {
        this.brandCom = brandCom;
    }

    public Integer getModelCom() {
        return modelCom;
    }

    public void setModelCom(Integer modelCom) {
        this.modelCom = modelCom;
    }

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    public String getNameCom() {
        return nameCom;
    }

    public void setNameCom(String nameCom) {
        this.nameCom = nameCom;
    }
}
