package co.usa.reto3.service;

import co.usa.reto3.model.Client;
import co.usa.reto3.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {
    
    @Autowired
    private ClientRepository clientRepository;
    
    public List<Client> getAll() {
        return clientRepository.getAll();
    }
    
    public Optional<Client> getClient(int idCli) {
        return clientRepository.getClient(idCli);
    }
    
    public Client save(Client client) {
        if (client.getIdCli() == null) {
            return clientRepository.save(client);
        } else {
            Optional<Client> cliAux = clientRepository.getClient(client.getIdCli());
            if (cliAux.isEmpty()) {
                return clientRepository.save(client);
            } else {
                return client;
            }
        }
    }
}
