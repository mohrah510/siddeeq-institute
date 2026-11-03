package com.siddeeqinstitute.backend.program;

import java.time.LocalDate;
import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class ProgramDataSeeder implements CommandLineRunner {

    private final ProgramRepository programRepository;

    public ProgramDataSeeder(ProgramRepository programRepository) {
        this.programRepository = programRepository;
    }

    @Override
    public void run(String... args) {
        if (programRepository.count() > 0) {
            return;
        }

        LocalDate deadline = LocalDate.now().plusMonths(2);

        programRepository.saveAll(List.of(
            new Program("Arabic Foundations", "Demo program: learn to read and write Arabic.",
                    Branch.SIDDEEQ, 20, deadline),
            new Program("Quran Recitation", "Demo program: weekly recitation practice.",
                    Branch.SIDDEEQ, 15, deadline),
            new Program("Seerah for Sisters", "Demo program: study the life of the Prophet.",
                    Branch.AISHAH, 25, deadline),
            new Program("Tajweed for Sisters", "Demo program: learn the rules of recitation.",
                    Branch.AISHAH, 12, deadline)
        ));
    }
}