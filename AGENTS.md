```markdown
# AGENTS.md - AI Coding Agent Guidelines

These guidelines are designed to ensure the consistent, high-quality development of AI coding agents within this repository. Adherence to these principles is crucial for maintainability, scalability, and reliability.

## 1. DRY (Don't Repeat Yourself)

*   **Module Design:** Each module (e.g., `core_logic`, `data_processing`, `agent_management`) should encapsulate specific functionalities.  Avoid creating boilerplate code that’s repeated across multiple modules.
*   **Function/Method Reuse:**  Identify common patterns and create reusable functions/methods to avoid duplication.
*   **Abstraction:**  Implement abstractions where possible to decouple components and enhance maintainability.
*   **Single Responsibility Principle:** Each module should have a well-defined, single responsibility.

## 2. KISS (Keep It Simple, Stupid)

*   **Code Clarity:** Strive for the shortest, most readable code.  Avoid unnecessary complexity.
*   **Simplicity:** Prioritize simplicity over cleverness.  Ensure calculations and logic are easy to understand.
*   **Minimize Complexity:** Keep algorithms and data structures as simple as possible while still achieving the desired outcome.

## 3. SOLID Principles

*   **Single Responsibility:** Each class/module should have one and only one reason to change.
*   **Open/Closed Principle:**  The system should be extensible without modifying the existing code.  New functionality should be added through new classes/modules.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without affecting the correctness of the program.
*   **Interface Segregation Principle:** Clients shouldn't be forced to bound to methods they don't use.
*   **Dependency Inversion Principle:** High-level modules should be dependent on interfaces, not concrete implementations.

## 4. YAGNI (You Aren't Gonna Need It)

*   **Avoid Unnecessary Features:** Do not implement features or functionalities that are not currently required.
*   **Focus on Core Requirements:**  Maintain a clear understanding of the fundamental requirements of the agent.
*   **Refactor Based on Requirements:**  Refactor only when requirements change or are clarified.

## 5. Development Workflow & Best Practices

*   **Version Control:** Use Git for all code modifications. Commit frequently with clear, concise commit messages.
*   **Code Reviews:** Implement mandatory code reviews for all changes before merging.
*   **Testing:** All code must be thoroughly tested with mocks/fake implementations.  Tests should cover all functionality.  Aim for 80% coverage.
*   **Documentation:**  Provide clear documentation for each module and function, including input/output expectations, and potential edge cases.
*   **Error Handling:** Implement robust error handling with informative error messages.
*   **Logging:** Utilize logging strategically to monitor system behavior and debug issues.
*   **Naming Conventions:**  Follow consistent naming conventions throughout the codebase (e.g., snake_case, camelCase).
*   **Code Formatting:** Use a code formatter (e.g., black, autopep8) to maintain consistent code style.
*   **Dependency Management:** Utilize a robust dependency management system (e.g., pipenv, Poetry) to manage project dependencies.

## 6. Code Structure & Constraints

*   **Maximum Code Length:**  Each file should ideally be no more than 180 lines of code.
*   **File Organization:**  Maintain a logical file structure reflecting the modules.
*   **Comments:**  Include concise comments where necessary to explain complex logic.
*   **Unit Tests:** Ensure that the code is well-tested with a comprehensive suite of unit tests.

## 7.  Testing Emphasis

*   **Mocking & Faking:** All tests must be performed using mocks and fake implementations. No reliance on real systems or data.
*   **Test Suite:**  A robust test suite covering all critical functionalities is required.
*   **Test Driven Development:** Prioritize writing tests before implementation.

## 8.  General Guidelines

*   **Keep it Functional:**  The primary goal is to create functional AI coding agents.
*   **Prioritize Readability:** Code should be easy to read and understand.
*   **Security:** Consider security implications when implementing functions.  Don't introduce vulnerabilities unnecessarily.
*   **Performance:**  Consider performance implications, especially when handling large datasets or complex computations.


These guidelines are intended to serve as a foundation for the development of the AGENTS.md repository.  Regular review and refinement are encouraged to maintain the code's quality and maintainability.
```