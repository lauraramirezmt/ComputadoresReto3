package co.usa.reto3.web;

import co.usa.reto3.model.Message;
import co.usa.reto3.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/message")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
public class MessageController {

    @Autowired
    private MessageService messageService;

    @GetMapping("/all")
    public List<Message> getMessages() {
        return messageService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Message> getMessageById(@PathVariable("id") int id) {
        return messageService.getMessage(id);
    }

    @PostMapping("/save")
    public Message save(@RequestBody Message message) {
        return messageService.save(message);
    }
}
