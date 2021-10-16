package co.usa.reto3.model;

import javax.persistence.*;

@Entity
@Table(name = "client")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCli;
    private String nameCli;
    private String emailCli;
    private Integer ageCli;

    public Integer getIdCli() {
        return idCli;
    }

    public void setIdCli(Integer idCli) {
        this.idCli = idCli;
    }

    public String getNameCli() {
        return nameCli;
    }

    public void setNameCli(String nameCli) {
        this.nameCli = nameCli;
    }

    public String getEmailCli() {
        return emailCli;
    }

    public void setEmailCli(String emailCli) {
        this.emailCli = emailCli;
    }

    public Integer getAgeCli() {
        return ageCli;
    }

    public void setAgeCli(Integer ageCli) {
        this.ageCli = ageCli;
    }
}
