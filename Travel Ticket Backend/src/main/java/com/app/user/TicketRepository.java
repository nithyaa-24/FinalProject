package com.app.user;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.user.Ticket;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
}
