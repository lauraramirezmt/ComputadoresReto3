package co.usa.reto3.service;

import co.usa.reto3.model.Reservation;
import co.usa.reto3.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    public List<Reservation> getAll() {
        return reservationRepository.getAll();
    }

    public Optional<Reservation> getReservation(int id) {
        return reservationRepository.getReservation(id);
    }

    public Reservation save(Reservation reservation) {
        if (reservation.getId() == null) {
            return reservationRepository.save(reservation);
        } else {
            Optional<Reservation> resAux = reservationRepository.getReservation(reservation.getId());
            if (resAux.isEmpty()) {
                return reservationRepository.save(reservation);
            } else {
                return reservation;
            }
        }
    }
}
