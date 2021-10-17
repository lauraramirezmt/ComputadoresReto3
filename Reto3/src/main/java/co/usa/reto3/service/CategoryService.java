package co.usa.reto3.service;

import co.usa.reto3.model.Category;
import co.usa.reto3.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> getAll() {
        return categoryRepository.getAll();
    }

    public Optional<Category> getCategory(int id) {
        return categoryRepository.getCategory(id);
    }

    public Category save(Category category) {
        if (category.getId() == null) {
            return categoryRepository.save(category);
        } else {
            Optional<Category> catAux = categoryRepository.getCategory(category.getId());
            if (catAux.isEmpty()) {
                return categoryRepository.save(category);
            } else {
                return category;
            }
        }
    }
}
