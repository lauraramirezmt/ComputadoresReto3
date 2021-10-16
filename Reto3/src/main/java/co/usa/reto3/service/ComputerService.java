package co.usa.reto3.service;

import co.usa.reto3.model.Computer;
import co.usa.reto3.repository.ComputerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ComputerService {

    @Autowired
    private ComputerRepository computerRepository;

    public List<Computer> getAll() {
        return computerRepository.getAll();
    }

    public Optional<Computer> getComputer(int idCom) {
        return computerRepository.getComputer(idCom);
    }

    public Computer save(Computer computer) {
        if (computer.getIdCom() == null) {
            return computerRepository.save(computer);
        } else {
            Optional<Computer> comAux = computerRepository.getComputer(computer.getIdCom());
            if (comAux.isEmpty()) {
                return computerRepository.save(computer);
            } else {
                return computer;
            }
        }
    }
}
