package co.usa.reto3.repository;

import co.usa.reto3.model.Computer;
import co.usa.reto3.repository.crud.ComputerCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ComputerRepository {

    @Autowired
    private ComputerCrudRepository computerCrudRepository;

    public List<Computer> getAll() {
        return (List<Computer>) computerCrudRepository.findAll();
    }

    public Optional<Computer> getComputer(int idCom) {
        return computerCrudRepository.findById(idCom);
    }

    public Computer save(Computer computer) {
        return computerCrudRepository.save(computer);
    }
}
