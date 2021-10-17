package co.usa.reto3.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "message")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String messagetext;

    // ManyToOne Client
    @ManyToOne
    @JoinColumn(name="messageClient")
    @JsonIgnoreProperties("clients")
    private Client client;

    @ManyToOne
    @JoinColumn(name="messageComputer")
    @JsonIgnoreProperties("messages")
    private Computer computer;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMessagetext() {
        return messagetext;
    }

    public void setMessagetext(String messagetext) {
        this.messagetext = messagetext;
    }

    public Client getClient() { return client; }

    public void setClient(Client client) {
        this.client = client;
    }

    public Computer getComputer() { return computer; }

    public void setComputer(Computer computer) {
        this.computer = computer;
    }
}
