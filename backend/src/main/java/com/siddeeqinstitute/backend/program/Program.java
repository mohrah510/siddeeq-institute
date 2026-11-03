package com.siddeeqinstitute.backend.program;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name = "programs")
public class Program {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String description;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Branch branch;

    @Column(nullable = false)
    private int capacity;

    @Column(nullable = false)
    private LocalDate registrationDeadline;

    protected Program() {
    }

    public Program(String name, String description, Branch branch,
                   int capacity, LocalDate registrationDeadline) {
        this.name = name;
        this.description = description;
        this.branch = branch;
        this.capacity = capacity;
        this.registrationDeadline = registrationDeadline;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public Branch getBranch() {
        return branch;
    }

    public int getCapacity() {
        return capacity;
    }

    public LocalDate getRegistrationDeadline() {
        return registrationDeadline;
    }
}