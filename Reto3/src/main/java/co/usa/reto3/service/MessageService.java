package co.usa.reto3.service;

import co.usa.reto3.model.Message;
import co.usa.reto3.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    public List<Message> getAll() {
        return messageRepository.getAll();
    }

    public Optional<Message> getMessage(int id) {
        return messageRepository.getMessage(id);
    }

    public Message save(Message message) {
        if (message.getId() == null) {
            return messageRepository.save(message);
        } else {
            Optional<Message> msgAux = messageRepository.getMessage(message.getId());
            if (msgAux.isEmpty()) {
                return messageRepository.save(message);
            } else {
                return message;
            }
        }
    }
}
